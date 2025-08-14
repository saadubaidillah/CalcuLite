import React from 'react';
import { ChefHat, Clock, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { mealPlans } from '../data/mealPlans';

interface MealPlansProps {
  language: Language;
}

export const MealPlans: React.FC<MealPlansProps> = ({ language }) => {
  const t = translations[language];
  const meals = mealPlans[language];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
          <ChefHat className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.mealPlan}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {meal.name}
              </h4>
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {meal.calories} {t.calories}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded">
                <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                  {meal.protein}g
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {t.protein}
                </div>
              </div>
              <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="text-sm font-bold text-green-600 dark:text-green-400">
                  {meal.carbs}g
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {t.carbs}
                </div>
              </div>
              <div className="text-center p-2 bg-accent-50 dark:bg-accent-900/20 rounded">
                <div className="text-sm font-bold text-accent-600 dark:text-accent-400">
                  {meal.fat}g
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {t.fat}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Ingredients:' : 'المكونات:'}
              </h5>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {meal.ingredients.map((ingredient, idx) => (
                  <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Instructions:' : 'التعليمات:'}
              </h5>
              <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {meal.instructions.map((instruction, idx) => (
                  <li key={idx} className="flex space-x-3 rtl:space-x-reverse">
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};