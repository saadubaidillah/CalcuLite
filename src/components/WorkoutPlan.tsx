import React from 'react';
import { Dumbbell, Clock, RotateCcw } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { workoutPlans } from '../data/workoutPlans';

interface WorkoutPlanProps {
  language: Language;
}

export const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ language }) => {
  const t = translations[language];
  const workouts = workoutPlans[language];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="bg-accent-100 dark:bg-accent-900/30 p-2 rounded-lg">
          <Dumbbell className="h-6 w-6 text-accent-600 dark:text-accent-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.workoutPlan}
        </h3>
      </div>

      <div className="space-y-6">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2 rtl:space-x-reverse">
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-3 py-1 rounded-full text-sm">
                {t.day} {index + 1}
              </span>
              <span>{workout.name}</span>
            </h4>

            <div className="grid gap-4">
              {workout.exercises.map((exercise, exerciseIndex) => (
                <div
                  key={exerciseIndex}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      {exercise.name}
                    </h5>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <RotateCcw className="h-4 w-4" />
                        <span>{exercise.sets} {t.sets}</span>
                      </span>
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Clock className="h-4 w-4" />
                        <span>{exercise.reps} {t.reps}</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {exercise.instructions}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};