# Todo List Application with Zustand (React + Vite)

This project is a simple Todo List application built using **React** and **Zustand** for state management. It demonstrates how Zustand simplifies state handling compared to prop drilling or complex Context API setups. The app also includes **localStorage persistence** to retain todos across page reloads.

## Project Setup

### 1. Create a React project with Vite:

```bash
npx create-vite@latest todo-zustand
cd todo-zustand
```

### 2. Install Zustand:

```bash
npm install zustand
```

## Folder Structure

```
src/
│
├── components/
│   ├── TodoInput.jsx    # Input form to add todos
│   ├── TodoItem.jsx     # Displays a single todo
│   └── TodoList.jsx     # Displays all todos
│
├── store/
│   └── todoStore.js     # Zustand store for managing state
│
├── App.js               # Main application component
└── index.js             # Entry point
```

## Zustand Store Features (todoStore.js)

### State:
- `todos`: Array of todo items

### Actions:
- `addTodo(text)`: Adds a new todo
- `toggleTodo(id)`: Toggles completion status
- `removeTodo(id)`: Deletes a todo
- `clearCompleted()`: Removes all completed todos

### Persistence:
- State is automatically saved and loaded from `localStorage` using Zustand's `persist` middleware

## Components Overview

- **TodoInput**
  - Text input and button to add new todos
- **TodoItem**
  - Displays a single todo with options to toggle or remove
- **TodoList**
  - Maps through todos and renders `TodoItem` for each

## App Integration

- `App.js` integrates all components
- Zustand hooks are used like `useTodoStore(state => state.todos)` for state access
- Updates are handled via store actions

## Key Concepts of Zustand

1. **Central Store**:
   - Created using `create()` from Zustand. Contains state and actions
2. **Selective Subscription**:
   - Components only re-render when subscribed state changes
3. **State Updates**:
   - Performed via `set()` inside actions
4. **Persistence**:
   - Middleware saves the store to `localStorage` and restores it on page load