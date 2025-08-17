import { useState, useCallback } from 'react';

interface FormState<T> {
  data: T;
  errors: Partial<Record<keyof T, string>>;
  isValid: boolean;
}

export const useForm = <T extends Record<string, any>>(
  initialData: T,
  validationRules?: Partial<Record<keyof T, (value: any) => string | null>>
) => {
  const [state, setState] = useState<FormState<T>>({
    data: initialData,
    errors: {},
    isValid: true
  });

  const validate = useCallback((data: T) => {
    if (!validationRules) return {};
    
    const errors: Partial<Record<keyof T, string>> = {};
    
    Object.entries(validationRules).forEach(([key, validator]) => {
      if (validator) {
        const error = validator(data[key as keyof T]);
        if (error) {
          errors[key as keyof T] = error;
        }
      }
    });
    
    return errors;
  }, [validationRules]);

  const updateField = useCallback((field: keyof T, value: any) => {
    setState(prev => {
      const newData = { ...prev.data, [field]: value };
      const errors = validate(newData);
      const isValid = Object.keys(errors).length === 0;
      
      return {
        data: newData,
        errors,
        isValid
      };
    });
  }, [validate]);

  const reset = useCallback(() => {
    setState({
      data: initialData,
      errors: {},
      isValid: true
    });
  }, [initialData]);

  return {
    ...state,
    updateField,
    reset
  };
};
