import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { UserData, Language } from '../types';
import { translations } from '../data/translations';

interface CalculatorFormProps {
  language: Language;
  onCalculate: (data: UserData) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  language,
  onCalculate,
}) => {
  const t = translations[language];
  const [formData, setFormData] = useState<UserData>({
    age: 25,
    gender: 'male',
    height: 175,
    weight: 70,
    activityLevel: 'moderate',
    goal: 'build',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const handleChange = (field: keyof UserData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 max-w-none">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
          <Calculator className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.personalInfo}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.age}
            </label>
            <input
              type="number"
              min="15"
              max="80"
              value={formData.age}
              onChange={(e) => handleChange('age', parseInt(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.gender}
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
            >
              <option value="male">{t.male}</option>
              <option value="female">{t.female}</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.height}
            </label>
            <input
              type="number"
              min="140"
              max="220"
              value={formData.height}
              onChange={(e) => handleChange('height', parseInt(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.weight}
            </label>
            <input
              type="number"
              min="40"
              max="200"
              value={formData.weight}
              onChange={(e) => handleChange('weight', parseInt(e.target.value))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Activity Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.activityLevel}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['sedentary', 'moderate', 'active'] as const).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleChange('activityLevel', level)}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.activityLevel === level
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium">{t[level]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {t.goal}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {(['build', 'lose', 'cut', 'maintain'] as const).map((goalType) => (
              <button
                key={goalType}
                type="button"
                onClick={() => handleChange('goal', goalType)}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  formData.goal === goalType
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="font-medium text-sm">{t[goalType]}</div>
              </button>
            ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-6 rounded-lg font-medium text-lg hover:from-primary-700 hover:to-accent-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          {t.calculate}
        </button>
      </form>
    </div>
  );
};
  )
}