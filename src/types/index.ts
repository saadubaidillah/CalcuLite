export interface UserData {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  activityLevel: 'sedentary' | 'moderate' | 'active';
  goal: 'build' | 'lose';
}

export interface MacroResults {
  bmr: number;
  tdee: number;
  goalTdee: number;
  protein: { grams: number; calories: number; percentage: number };
  fat: { grams: number; calories: number; percentage: number };
  carbs: { grams: number; calories: number; percentage: number };
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  instructions: string;
}

export interface WorkoutDay {
  name: string;
  exercises: Exercise[];
}

export interface MealPlan {
  name: string;
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
}

export type Language = 'en' | 'ar';

export type Theme = 'light' | 'dark';