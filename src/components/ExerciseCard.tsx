import { Info, RotateCcw, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Exercise, Language } from '../types';

interface ExerciseCardProps {
    exercise: Exercise;
    exerciseIndex: number;
    language: Language;
    t: any; // translations object
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
    exercise,
    exerciseIndex,
    language,
    t
}) => {
    const [showInstructions, setShowInstructions] = useState(false);

    return (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-all">
            {/* Exercise Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                        {exerciseIndex + 1}. {exercise.name}
                    </h5>

                    {/* Exercise Stats */}
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center space-x-1 rtl:space-x-reverse bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full">
                            <RotateCcw className="h-4 w-4" />
                            <span>{exercise.sets} {t.sets}</span>
                        </span>
                        <span className="flex items-center space-x-1 rtl:space-x-reverse bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-3 py-1 rounded-full">
                            <Users className="h-4 w-4" />
                            <span>{exercise.reps} {t.reps}</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="bg-white dark:bg-gray-600 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {language === 'en' ? 'Instructions:' : 'التعليمات:'}
                    </span>
                    <button
                        onClick={() => setShowInstructions(!showInstructions)}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                        <Info className="h-4 w-4" />
                    </button>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exercise.instructions}
                </p>

                {showInstructions && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-500">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            {language === 'en' 
                                ? 'Focus on proper form and controlled movements. Adjust weight and reps according to your fitness level.'
                                : 'ركز على الشكل الصحيح والحركات المنضبطة. اضبط الوزن والتكرارات حسب مستوى لياقتك.'
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
