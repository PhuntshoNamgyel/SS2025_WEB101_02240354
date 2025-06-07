# Todo List Application with Zustand Reflection

## Main Concepts Applied

In this practical, I created a Todo List application using React and Zustand. I applied key state management concepts including:

* Central state management using Zustand store
* State actions: `addTodo`, `toggleTodo`, `removeTodo`, and `clearCompleted`
* Component-based architecture with TodoInput, TodoItem, and TodoList
* localStorage persistence using Zustand's `persist` middleware
* Selective state subscriptions for optimized re-rendering
* React hooks integration with Zustand store

## What I Learned

I learned how to create a Zustand store and use it inside a React project. I now understand how to:

* Set up a central store that combines state and actions in one place
* Access store state and actions from React components using custom hooks
* Implement selective subscriptions so components only re-render when needed
* Use middleware to save and load state from localStorage automatically
* Organize React projects with clean separation between components and state logic

This helped me understand how Zustand simplifies state management without needing props drilling or the Context API, and how it improves application performance through selective re-rendering.

## Challenges and How I Solved Them

### Challenge 1: Connecting Components to Zustand Store
* **Problem:** I was not accessing the store's actions properly and had trouble understanding the correct syntax for connecting components
* **Solution:** I solved this by reviewing the Zustand documentation and practicing the correct hook syntax to access both state and actions from the store

### Challenge 2: Setting Up localStorage Persistence
* **Problem:** I had trouble implementing localStorage persistence and the todos weren't being saved across browser refreshes
* **Solution:** I solved this by importing and using the `persist` function from Zustand correctly in the store file, wrapping the store configuration with the persistence middleware

## Conclusion

This practical gave me hands-on experience in building a modern React application with effective state management. Key achievements include:

* Understanding how Zustand works for lightweight state management in React
* Learning to manage shared state without prop drilling or complex Context setups
* Gaining experience with state persistence and middleware integration
* Building confidence in organizing React components with centralized state logic

Overall, this practical enhanced my React development skills and provided valuable experience with Zustand as a simple alternative to more complex state management solutions. I now feel confident using Zustand in similar projects, especially when I want lightweight and easy-to-use global state management.