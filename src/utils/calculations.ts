import { UserData, MacroResults } from '../types';

export const calculateMacros = (userData: UserData): MacroResults => {
  const { age, gender, height, weight, activityLevel, goal } = userData;

  // Step 1: Calculate BMR using Mifflin-St Jeor formula (exact implementation)
  let bmr: number;
  if (gender === 'male') {
    // Men: BMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years) + 5
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    // Women: BMR = (10 × weight in kg) + (6.25 × height in cm) – (5 × age in years) – 161
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // Step 2: Calculate TDEE (Total Daily Energy Expenditure)
  // TDEE = BMR × PAL (Physical Activity Level)
  const activityMultipliers = {
    sedentary: 1.4,    // Sedentary
    moderate: 1.6,     // Moderately Active  
    active: 1.8        // Highly Active
  };
  const tdee = bmr * activityMultipliers[activityLevel];

  // Step 3: Calculate Goal TDEE
  // Build Muscle: Goal TDEE = TDEE + 500
  // Lose Fat + Build Muscle: Goal TDEE = TDEE - 500
  let goalTdee: number;
  if (goal === 'build') {
    goalTdee = tdee + 500; // +500 kcal for muscle gain
  } else {
    goalTdee = tdee - 500; // -500 kcal for fat loss + muscle gain
  }

  // Step 4: Calculate Protein Needs
  // Protein (g) = weight in kg × 1.6
  const proteinGrams = weight * 1.6;
  // Protein calories = Protein (g) × 4
  const proteinCalories = proteinGrams * 4;

  // Step 5: Calculate Fat Needs
  // Fat calories = Goal TDEE × 35%
  const fatCalories = goalTdee * 0.35;
  // Fat (g) = Fat calories ÷ 9
  const fatGrams = fatCalories / 9;

  // Step 6: Calculate Carbohydrate Needs
  // Carb calories = Goal TDEE – (Protein calories + Fat calories)
  const carbCalories = goalTdee - (proteinCalories + fatCalories);
  // Carbs (g) = Carb calories ÷ 4
  const carbGrams = carbCalories / 4;

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    goalTdee: Math.round(goalTdee),
    protein: {
      grams: Math.round(proteinGrams),
      calories: Math.round(proteinCalories),
      percentage: Math.round((proteinCalories / goalTdee) * 100)
    },
    fat: {
      grams: Math.round(fatGrams),
      calories: Math.round(fatCalories),
      percentage: Math.round((fatCalories / goalTdee) * 100)
    },
    carbs: {
      grams: Math.round(carbGrams),
      calories: Math.round(carbCalories),
      percentage: Math.round((carbCalories / goalTdee) * 100)
    }
  };
};