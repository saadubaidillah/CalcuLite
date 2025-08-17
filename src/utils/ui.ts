/**
 * Utility functions for styling and UI helpers
 */

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getDifficultyColor = (difficulty: string): string => {
  const colorMap: Record<string, string> = {
    Easy: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    Medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    Hard: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };
  
  return colorMap[difficulty] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
};

export const getCategoryIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    breakfast: '🌅',
    lunch: '🌞',
    dinner: '🌙',
    snack: '🍎'
  };
  
  return iconMap[category] || '🍽️';
};

export const formatNumber = (num: number, locale?: string): string => {
  return new Intl.NumberFormat(locale).format(num);
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
