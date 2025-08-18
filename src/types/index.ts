export interface UserData {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  activityLevel: 'sedentary' | 'moderate' | 'active';
  goal: 'build' | 'lose' | 'cut' | 'maintain' | 'recomp';
}

export interface FormData {
  age: string;
  gender: 'male' | 'female';
  height: string;
  weight: string;
  activityLevel: 'sedentary' | 'moderate' | 'active';
  goal: 'build' | 'lose' | 'cut' | 'maintain' | 'recomp';
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
  // Optional fields for API integration
  apiId?: string;
  gifUrl?: string;
  bodyPart?: string;
  equipment?: string;
  target?: string;
}

// API Exercise interface for external data
export interface ExerciseAPI {
  id: string;
  name: string;
  gifUrl: string;
  bodyPart: string;
  equipment: string;
  target: string;
  instructions: string[];
}

export interface WorkoutDay {
  name: string;
  focus: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: Exercise[];
}

export interface WorkoutPlan {
  name: string;
  description: string;
  days: WorkoutDay[];
  restDays: number;
}

export interface MealPlan {
  name: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
}

export type Language = 'en' | 'ar';

export type Theme = 'light' | 'dark';