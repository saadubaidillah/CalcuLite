# Contributing to Calories Calculator 🍏

First off, thank you for considering contributing to Calories Calculator! It's people like you that make this project a great tool for the fitness community.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Feature Requests](#feature-requests)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/Smart-Calories-Calculator.git
   cd Smart-Calories-Calculator
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/FatoomRe/Smart-Calories-Calculator.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Run tests**
   ```bash
   npm run test
   ```

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

#### 🐛 Bug Fixes
- Fix calculation errors
- Resolve UI/UX issues
- Improve performance
- Fix accessibility problems

#### ✨ Features
- New calculation methods
- Additional languages
- Workout plan improvements
- Export format options

#### 📖 Documentation
- API documentation
- Code comments
- User guides
- Translation improvements

#### 🎨 Design
- UI improvements
- Color scheme enhancements
- Icon updates
- Responsive design fixes

### Finding Issues to Work On

1. **Good First Issues**: Look for `good-first-issue` label
2. **Help Wanted**: Check `help-wanted` label
3. **Bugs**: Search for `bug` label
4. **Enhancements**: Look for `enhancement` label

## Development Guidelines

### Code Style

We use ESLint and Prettier for code formatting:

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### TypeScript Guidelines

- Use strict TypeScript settings
- Define interfaces for all props
- Avoid `any` type
- Use proper generic types

```typescript
// ✅ Good
interface UserData {
  age: number;
  weight: number;
  height: number;
}

// ❌ Bad
interface UserData {
  age: any;
  weight: any;
  height: any;
}
```

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use proper prop typing
- Include accessibility attributes

```typescript
// ✅ Good Component Structure
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
      aria-label="Button action"
    >
      {children}
    </button>
  );
};
```

### CSS/Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing
- Support dark mode

```tsx
// ✅ Good Tailwind Usage
<div className="flex flex-col md:flex-row gap-4 p-6 bg-white dark:bg-gray-800">
  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
    Click me
  </button>
</div>
```

### Testing Guidelines

- Write unit tests for utilities
- Test component rendering
- Test user interactions
- Maintain test coverage above 80%

```typescript
// Example test
describe('calculateBMR', () => {
  test('should calculate BMR for male correctly', () => {
    const result = calculateBMR(70, 175, 25, 'male');
    expect(result).toBeCloseTo(1673, 0);
  });

  test('should calculate BMR for female correctly', () => {
    const result = calculateBMR(60, 165, 25, 'female');
    expect(result).toBeCloseTo(1379, 0);
  });
});
```

### Internationalization Guidelines

- Add translations for both English and Arabic
- Test RTL layout for Arabic
- Use semantic keys for translations

```typescript
// ✅ Good translation structure
const translations = {
  en: {
    calculator: {
      title: "Calories Calculator",
      age: "Age (years)",
      submit: "Calculate My Plan"
    }
  },
  ar: {
    calculator: {
      title: "حاسبة السعرات",
      age: "العمر (سنة)",
      submit: "احسب خطتي"
    }
  }
};
```

## Pull Request Process

### Before Submitting

1. **Update from upstream**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow coding guidelines
   - Add tests
   - Update documentation

4. **Test your changes**
   ```bash
   npm run test
   npm run build
   ```

5. **Commit with semantic messages**
   ```bash
   git commit -m "feat: add new calculation method"
   git commit -m "fix: resolve mobile layout issue"
   git commit -m "docs: update API documentation"
   ```

### Commit Message Format

Use semantic commit messages:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Pull Request Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Unit tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing

## Screenshots
Include screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
```

## Issue Reporting

### Bug Reports

Use this template for bug reports:

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What should happen

**Screenshots**
Add screenshots if applicable

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]
```

### Performance Issues

For performance-related issues:
- Include browser DevTools performance screenshots
- Mention device specifications
- Describe the specific slow operation

## Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Screenshots, mockups, or examples
```

### Feature Priorities

We prioritize features based on:
1. **User Impact**: How many users benefit
2. **Complexity**: Development effort required
3. **Alignment**: Fits project goals
4. **Community Interest**: GitHub reactions and comments

## Code Review Process

### What We Look For

- **Functionality**: Does it work correctly?
- **Code Quality**: Is it readable and maintainable?
- **Performance**: Does it impact app performance?
- **Security**: Are there any security concerns?
- **Accessibility**: Is it accessible to all users?
- **Testing**: Are there adequate tests?

### Review Timeline

- **Small PRs**: 1-2 days
- **Medium PRs**: 3-5 days
- **Large PRs**: 1-2 weeks

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- README.md acknowledgments
- Release notes (for significant contributions)

## Community

Join our community:
- **GitHub Discussions**: Technical discussions
- **Issues**: Bug reports and feature requests
- **Discord**: Real-time chat (coming soon)

## Questions?

Don't hesitate to ask questions:
- Create a GitHub Discussion
- Comment on existing issues
- Reach out to maintainers

---

**Thank you for contributing to Calories Calculator! 🍏💚**

Together, we're building a tool that helps people achieve their fitness goals.
