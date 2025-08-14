# 🍏 Calories Calculator & Workout Planner

A modern, web application for calculating daily calorie needs, macro breakdowns, and personalized workout plans. Built with React, TypeScript, and Tailwind CSS.

![Calories Calculator](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🧮 Calorie & Macro Calculator
- **BMR Calculation**: Basal Metabolic Rate using proven formulas
- **TDEE Calculation**: Total Daily Energy Expenditure based on activity level
- **Macro Breakdown**: Personalized protein, carbs, and fat distribution
- **Goal-oriented**: Support for muscle building and fat loss goals

### 🏋️ Workout Planning
- **4-Day Split Program**: Scientifically designed workout routines
- **Exercise Instructions**: Detailed guidance for each exercise
- **Progressive Overload**: Sets and reps recommendations
- **Muscle Group Focus**: Legs, Push, Pull workout split

### 🌍 Bilingual Support
- **English & Arabic**: Full RTL support for Arabic
- **Seamless Switching**: Toggle between languages instantly
- **Localized Content**: All text, numbers, and UI elements

### 🎨 Modern UI/UX
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Green Theme**: Beautiful green gradient color scheme
- **Smooth Animations**: Hover effects and transitions

### 📄 Export Features
- **PDF Export**: Download your complete plan
- **Print Support**: Print-friendly layouts
- **Data Persistence**: Save your calculations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calories-calculator.git
   cd calories-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **PDF Generation**: jsPDF
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── CalculatorForm.tsx
│   ├── Header.tsx
│   ├── ResultsDisplay.tsx
│   ├── MacroChart.tsx
│   ├── WorkoutPlan.tsx
│   └── MealPlans.tsx
├── data/               # Static data and translations
│   ├── translations.ts
│   ├── workoutPlans.ts
│   └── mealPlans.ts
├── hooks/              # Custom React hooks
│   ├── useLanguage.ts
│   └── useTheme.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── calculations.ts
│   └── pdfExport.ts
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_NAME="Calories Calculator"
VITE_APP_VERSION="1.0.0"
```

### Tailwind Configuration

The project uses a custom green color scheme. Modify `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    // Green shades
    500: '#22c55e',
    600: '#16a34a',
    // ...
  },
  accent: {
    // Emerald shades
    500: '#10b981',
    600: '#059669',
    // ...
  }
}
```

## 🧮 Calculation Formulas

### BMR (Basal Metabolic Rate)
- **Men**: BMR = 88.362 + (13.397 × weight) + (4.799 × height) - (5.677 × age)
- **Women**: BMR = 447.593 + (9.247 × weight) + (3.098 × height) - (4.330 × age)

### TDEE (Total Daily Energy Expenditure)
- **Sedentary**: BMR × 1.2
- **Moderately Active**: BMR × 1.55
- **Highly Active**: BMR × 1.9

### Macro Distribution
- **Muscle Building**: 30% Protein, 40% Carbs, 30% Fat
- **Fat Loss**: 35% Protein, 30% Carbs, 35% Fat

## 🎯 Usage Examples

### Basic Calculation
```typescript
const results = calculateMacros({
  age: 25,
  gender: 'male',
  height: 175,
  weight: 70,
  activityLevel: 'moderate',
  goal: 'build'
});
```

### Language Switching
```typescript
const { language, switchLanguage } = useLanguage();
// Switch to Arabic
switchLanguage('ar');
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Add tests for new features
- Ensure responsive design
- Support both languages (EN/AR)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with 💚 by [Fatoomre](https://github.com/fatoomre)
- Inspired by modern fitness and nutrition science
- Icons by [Lucide](https://lucide.dev/)
- Color palette inspired by nature's green tones

## 🗺️ Roadmap

- [ ] Mobile app version (React Native)
- [ ] User accounts and data sync
- [ ] Advanced meal planning
- [ ] Integration with fitness trackers
- [ ] Multiple language support
- [ ] Nutrition database integration
- [ ] Progress tracking and analytics

---

<div align="center">
  <strong>🍏 Start your fitness journey today! 🍏</strong>
  <br>
  <sub>Calculate • Plan • Achieve</sub>
</div>
