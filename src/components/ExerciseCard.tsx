import { ExternalLink, Info, Pause, Play, RotateCcw, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Exercise, ExerciseAPI, Language } from '../types';
import { exerciseAPI, mapExerciseNameToAPI } from '../utils/exerciseAPI';

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
    const [apiData, setApiData] = useState<ExerciseAPI | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    // Fetch exercise data from API when component mounts
    useEffect(() => {
        const fetchExerciseData = async () => {
            setIsLoading(true);
            try {
                const searchTerm = mapExerciseNameToAPI(exercise.name);
                const results = await exerciseAPI.searchByName(searchTerm);

                if (results.length > 0) {
                    setApiData(results[0]); // Use the first match
                }
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExerciseData();
    }, [exercise.name]);

    const handleImageError = () => {
        setShowGif(false);
    };

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

                        {/* API Data Tags */}
                        {apiData && (
                            <>
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                                    {apiData.bodyPart}
                                </span>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                                    {apiData.equipment}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* Exercise Animation/Image */}
                {apiData && apiData.gifUrl && (
                    <div className="lg:ml-4 mb-3 lg:mb-0">
                        <div className="relative">
                            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                                {isLoading ? (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                                    </div>
                                ) : showGif ? (
                                    <img
                                        src={apiData.gifUrl}
                                        alt={exercise.name}
                                        className="w-full h-full object-cover"
                                        onError={handleImageError}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
                                        <button
                                            onClick={() => setShowGif(true)}
                                            className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                                        >
                                            <Play className="h-5 w-5 ml-1" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Animation Controls */}
                            {showGif && (
                                <button
                                    onClick={() => setShowGif(false)}
                                    className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <Pause className="h-3 w-3" />
                                </button>
                            )}
                        </div>

                        {/* View Animation Button */}
                        {!showGif && apiData.gifUrl && (
                            <button
                                onClick={() => setShowGif(true)}
                                className="mt-2 w-full text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center justify-center space-x-1 rtl:space-x-reverse"
                            >
                                <Play className="h-3 w-3" />
                                <span>{language === 'en' ? 'View Animation' : 'عرض الحركة'}</span>
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Instructions */}
            <div className="bg-white dark:bg-gray-600 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                        {language === 'en' ? 'Instructions:' : 'التعليمات:'}
                    </span>
                    {apiData && apiData.instructions.length > 0 && (
                        <button
                            onClick={() => setShowInstructions(!showInstructions)}
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                            <Info className="h-4 w-4" />
                        </button>
                    )}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    {exercise.instructions}
                </p>

                {/* Enhanced API Instructions */}
                {showInstructions && apiData && apiData.instructions.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-500">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 font-medium">
                            {language === 'en' ? 'Detailed Steps:' : 'خطوات مفصلة:'}
                        </p>
                        <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                            {apiData.instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="flex-1">{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>

            {/* Target Muscle Info */}
            {apiData && (
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>
                        {language === 'en' ? 'Target:' : 'العضلة المستهدفة:'} {apiData.target}
                    </span>
                    {apiData.gifUrl && (
                        <a
                            href={apiData.gifUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                            <ExternalLink className="h-3 w-3" />
                            <span>{language === 'en' ? 'View Full Size' : 'عرض بالحجم الكامل'}</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};
