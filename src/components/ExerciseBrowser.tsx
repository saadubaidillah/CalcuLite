import { Filter, Play, Search, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ExerciseAPI, Language } from '../types';
import { exerciseAPI } from '../utils/exerciseAPI';

interface ExerciseBrowserProps {
  language: Language;
  onClose: () => void;
  onSelectExercise?: (exercise: ExerciseAPI) => void;
}

export const ExerciseBrowser: React.FC<ExerciseBrowserProps> = ({
  language,
  onClose,
  onSelectExercise
}) => {
  const [exercises, setExercises] = useState<ExerciseAPI[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<ExerciseAPI[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>('all');
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load exercises and body parts on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [exerciseData, bodyPartData] = await Promise.all([
          exerciseAPI.getAllExercises(50), // Load 50 exercises
          exerciseAPI.getBodyParts()
        ]);
        
        setExercises(exerciseData);
        setFilteredExercises(exerciseData);
        setBodyParts(['all', ...bodyPartData]);
      } catch (error) {
        console.error('Error loading exercise data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter exercises based on search and body part
  useEffect(() => {
    let filtered = exercises;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(exercise =>
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.target.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by body part
    if (selectedBodyPart !== 'all') {
      filtered = filtered.filter(exercise =>
        exercise.bodyPart === selectedBodyPart
      );
    }

    setFilteredExercises(filtered);
  }, [searchTerm, selectedBodyPart, exercises]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {language === 'en' ? 'Exercise Library' : 'مكتبة التمارين'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search exercises...' : 'البحث في التمارين...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={selectedBodyPart}
                onChange={(e) => setSelectedBodyPart(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none"
              >
                {bodyParts.map(part => (
                  <option key={part} value={part}>
                    {part === 'all' 
                      ? (language === 'en' ? 'All Body Parts' : 'جميع أجزاء الجسم')
                      : part.charAt(0).toUpperCase() + part.slice(1)
                    }
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Exercise Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : filteredExercises.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {language === 'en' ? 'No exercises found' : 'لم يتم العثور على تمارين'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => onSelectExercise?.(exercise)}
                >
                  {/* Exercise Image/GIF */}
                  <div className="relative mb-3">
                    <div className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                      <img
                        src={exercise.gifUrl}
                        alt={exercise.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <Play className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Exercise Info */}
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                    {exercise.name}
                  </h3>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Target:' : 'الهدف:'}
                      </span>
                      <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full">
                        {exercise.target}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Body Part:' : 'جزء الجسم:'}
                      </span>
                      <span className="bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-2 py-1 rounded-full">
                        {exercise.bodyPart}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Equipment:' : 'المعدات:'}
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        {exercise.equipment}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? `Showing ${filteredExercises.length} exercises`
              : `عرض ${filteredExercises.length} تمرين`
            }
          </p>
        </div>
      </div>
    </div>
  );
};
