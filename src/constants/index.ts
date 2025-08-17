/**
 * Application constants
 */

export const APP_CONFIG = {
  name: 'CalcuLite',
  version: '1.0.0',
  description: 'Calculate your daily calories and get personalized workout plans',
  author: 'Fatoomre',
  splashDuration: 3000, // milliseconds
} as const;

export const FORM_LIMITS = {
  age: { min: 15, max: 100 },
  height: { min: 120, max: 250 },
  weight: { min: 30, max: 300 },
} as const;

export const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  moderate: 1.55,
  active: 1.9,
} as const;

export const GOAL_MULTIPLIERS = {
  build: 1.1,   // +10% for muscle gain
  lose: 0.85,   // -15% for fat loss
  maintain: 1.0, // maintenance
} as const;

export const MACRO_RATIOS = {
  build: { protein: 0.30, carbs: 0.40, fat: 0.30 },
  lose: { protein: 0.35, carbs: 0.30, fat: 0.35 },
  maintain: { protein: 0.30, carbs: 0.40, fat: 0.30 },
} as const;

export const THEME_CONFIG = {
  storageKey: 'theme',
  defaultTheme: 'light',
} as const;

export const LANGUAGE_CONFIG = {
  storageKey: 'language',
  defaultLanguage: 'ar',
  supportedLanguages: ['en', 'ar'],
} as const;
