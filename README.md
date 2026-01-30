# React Interview Exercise: Class to Hooks Migration

## Overview
This exercise tests your ability to convert a class-based React component to a modern functional component using Hooks.

## Task
Convert the `ClassComponent` in `src/components/ClassComponent.tsx` to use React Hooks instead of class-based lifecycle methods.

## Requirements
- Create your solution in `src/components/HooksComponent.tsx`
- Maintain the exact same functionality and behavior
- Use appropriate React Hooks (`useState`, `useEffect`, etc.)
- Ensure all lifecycle method logic is properly translated
- Keep the same UI and styling

## What to Focus On
- **State management**: Convert `this.state` and `this.setState` to `useState`
- **Lifecycle methods**: Map lifecycle methods to appropriate `useEffect` hooks
- **Event handlers**: Convert class methods to functions
- **Context**: Convert `this` references appropriately

## Testing Your Solution
Both components should:
- Display the same UI
- Behave identically when interacting with buttons
- Show the same data fetching behavior
- Handle cleanup properly

Run the app with:
```bash
npm install
npm run dev
```

## Evaluation Criteria
- ✅ Correct use of `useState` for state management
- ✅ Proper `useEffect` dependencies
- ✅ Equivalent behavior to the class component
- ✅ Clean, readable code
- ✅ No memory leaks or missing cleanup

## Time Estimate
15-30 minutes

Good luck! 🚀