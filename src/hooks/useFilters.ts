import { useState } from 'react';

export const useFilters = <T extends Record<string, any>>(
  data: T[],
  initialFilters: Record<string, string> = {}
) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredData = data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === 'all' || !value) return true;
      return item[key] === value;
    });
  });

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return {
    filters,
    filteredData,
    updateFilter,
    resetFilters
  };
};
