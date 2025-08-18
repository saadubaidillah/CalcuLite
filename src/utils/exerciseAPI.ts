// ExerciseDB API configuration and functions
import { ExerciseAPI } from '../types';

const RAPIDAPI_KEY = 'YOUR_RAPIDAPI_KEY'; // You'll need to get this from RapidAPI
const BASE_URL = 'https://exercisedb.p.rapidapi.com';

// For demo purposes, we'll use a mock API that doesn't require a key
const DEMO_MODE = true;

// Mock data for demonstration (you can remove this when you get a real API key)
const mockExercises: ExerciseAPI[] = [
    {
        id: '0001',
        name: 'squats',
        gifUrl: 'https://v2.exercisedb.io/image/fJxLsW0-Lz9MqG',
        bodyPart: 'upper legs',
        equipment: 'body weight',
        target: 'glutes',
        instructions: [
            'Stand with feet hip width apart',
            'Lower your body as if sitting back into a chair',
            'Keep your chest up and knees behind toes',
            'Return to starting position'
        ]
    },
    {
        id: '0002',
        name: 'push ups',
        gifUrl: 'https://v2.exercisedb.io/image/QB3x3LFLqB2XHq',
        bodyPart: 'chest',
        equipment: 'body weight',
        target: 'pectorals',
        instructions: [
            'Start in plank position with hands under shoulders',
            'Lower body until chest nearly touches floor',
            'Push back up to starting position',
            'Keep body in straight line throughout'
        ]
    },
    {
        id: '0003',
        name: 'bent over row',
        gifUrl: 'https://v2.exercisedb.io/image/M4LpHyZcXRfNLN',
        bodyPart: 'back',
        equipment: 'barbell',
        target: 'lats',
        instructions: [
            'Hinge at hips with knees slightly bent',
            'Pull barbell to lower chest',
            'Keep core engaged and back straight',
            'Lower with control'
        ]
    }
];

// Exercise API functions
export const exerciseAPI = {
    // Search exercises by name
    searchByName: async (name: string): Promise<ExerciseAPI[]> => {
        if (DEMO_MODE) {
            // Return mock data that matches the search
            return mockExercises.filter(exercise =>
                exercise.name.toLowerCase().includes(name.toLowerCase())
            );
        }

        try {
            const response = await fetch(`${BASE_URL}/exercises/name/${name}`, {
                headers: {
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch exercises');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching exercises:', error);
            return [];
        }
    },

    // Get exercises by body part
    getByBodyPart: async (bodyPart: string): Promise<ExerciseAPI[]> => {
        if (DEMO_MODE) {
            return mockExercises.filter(exercise =>
                exercise.bodyPart.toLowerCase() === bodyPart.toLowerCase()
            );
        }

        try {
            const response = await fetch(`${BASE_URL}/exercises/bodyPart/${bodyPart}`, {
                headers: {
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch exercises');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching exercises:', error);
            return [];
        }
    },

    // Get all exercises (limited to first 20 for performance)
    getAllExercises: async (limit: number = 20): Promise<ExerciseAPI[]> => {
        if (DEMO_MODE) {
            return mockExercises.slice(0, limit);
        }

        try {
            const response = await fetch(`${BASE_URL}/exercises?limit=${limit}`, {
                headers: {
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch exercises');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching exercises:', error);
            return [];
        }
    },

    // Get available body parts
    getBodyParts: async (): Promise<string[]> => {
        if (DEMO_MODE) {
            return ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'];
        }

        try {
            const response = await fetch(`${BASE_URL}/exercises/bodyPartList`, {
                headers: {
                    'X-RapidAPI-Key': RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch body parts');
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching body parts:', error);
            return [];
        }
    }
};

// Helper function to map common exercise names to API search terms
export const mapExerciseNameToAPI = (exerciseName: string): string => {
    const nameMap: Record<string, string> = {
        'squats': 'squat',
        'push-ups': 'push up',
        'bent-over rows': 'bent over row',
        'overhead press': 'overhead press',
        'plank': 'plank',
        'deadlifts': 'deadlift',
        'bench press': 'bench press',
        'pull-ups': 'pull up',
        'lunges': 'lunge',
        'dips': 'dip'
    };

    const lowercaseName = exerciseName.toLowerCase();
    return nameMap[lowercaseName] || exerciseName;
};
