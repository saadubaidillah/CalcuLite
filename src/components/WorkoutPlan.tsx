import React, { useState } from 'react';
import { Dumbbell, Clock, RotateCcw, Users, Target, Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { workoutPlans } from '../data/workoutPlans';

interface WorkoutPlanProps {
  language: Language;
}

export const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ language }) => {
  const t = translations[language];
  const [selectedPlan, setSelectedPlan] = useState<string>('4day');
  const [selectedDay, setSelectedDay] = useState<number>(0);
  
  const plans = workoutPlans[language];
  const currentPlan = plans[selectedPlan];

  const planOptions = [
    { key: '3day', name: language === 'en' ? '3-Day Full Body' : '3 أيام - الجسم كامل', level: 'Beginner' },
    { key: '4day', name: language === 'en' ? '4-Day Upper/Lower' : '4 أيام - علوي/سفلي', level: 'Intermediate' },
    { key: '5day', name: language === 'en' ? '5-Day Push/Pull/Legs' : '5 أيام - دفع/سحب/أرجل', level: 'Advanced' },
    { key: '6day', name: language === 'en' ? '6-Day High Frequency' : '6 أيام - تكرار عالي', level: 'Advanced' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
        <div className="bg-accent-100 dark:bg-accent-900/30 p-2 rounded-lg">
          <Dumbbell className="h-6 w-6 text-accent-600 dark:text-accent-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'Professional Workout Plans' : 'خطط التمارين المهنية'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {language === 'en' ? 'Choose your training split and customize your workout' : 'اختر تقسيم التدريب وخصص تمرينك'}
          </p>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {language === 'en' ? 'Select Your Training Split' : 'اختر تقسيم التدريب'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {planOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => {
                setSelectedPlan(option.key);
                setSelectedDay(0);
              }}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedPlan === option.key
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                  {option.name}
                </h5>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(option.level)}`}>
                  {option.level}
                </span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-gray-600 dark:text-gray-400">
                <Calendar className="h-3 w-3" />
                <span>{plans[option.key].days.length} {language === 'en' ? 'days' : 'أيام'}</span>
                <span>•</span>
                <span>{plans[option.key].restDays} {language === 'en' ? 'rest days' : 'أيام راحة'}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Plan Overview */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {currentPlan.name}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {currentPlan.description}
            </p>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
            <div className="text-center">
              <div className="font-bold text-primary-600 dark:text-primary-400">
                {currentPlan.days.length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Training Days' : 'أيام التدريب'}
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-accent-600 dark:text-accent-400">
                {currentPlan.restDays}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Rest Days' : 'أيام الراحة'}
              </div>
            </div>
          </div>
        </div>

        {/* Day Selection */}
        <div className="flex flex-wrap gap-2">
          {currentPlan.days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDay === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              {language === 'en' ? `Day ${index + 1}` : `اليوم ${index + 1}`}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Day Details */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {currentPlan.days[selectedDay].name}
            </h4>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Target className="h-4 w-4" />
                <span>{currentPlan.days[selectedDay].focus}</span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Clock className="h-4 w-4" />
                <span>{currentPlan.days[selectedDay].duration}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentPlan.days[selectedDay].difficulty)}`}>
                {currentPlan.days[selectedDay].difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-4">
          {currentPlan.days[selectedDay].exercises.map((exercise, exerciseIndex) => (
            <div
              key={exerciseIndex}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h5 className="font-semibold text-gray-900 dark:text-white text-lg">
                  {exerciseIndex + 1}. {exercise.name}
                </h5>
                <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
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
              <div className="bg-white dark:bg-gray-600 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {language === 'en' ? 'Instructions: ' : 'التعليمات: '}
                  </span>
                  {exercise.instructions}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rest Day Reminder */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded">
              <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <span className="font-medium">
                {language === 'en' ? 'Rest Day Reminder: ' : 'تذكير يوم الراحة: '}
              </span>
              {language === 'en' 
                ? 'Allow adequate recovery between sessions. Rest days are crucial for muscle growth and preventing injury.'
                : 'اسمح بالتعافي الكافي بين الجلسات. أيام الراحة ضرورية لنمو العضلات ومنع الإصابات.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};