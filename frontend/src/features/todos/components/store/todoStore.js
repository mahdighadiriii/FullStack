import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [
    { id: 1, title: "Learn React", description: "Study hooks and state", completed: false },
    { id: 2, title: "Build Todo App", description: "Create a Web3-style UI", completed: true },
  ],
  error: null,

  addTodo: ({ title, desc }) => {
    if (!title.trim()) {
      set({ error: "Title is required" });
      return;
    }
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, description: desc, completed: false }],
      error: null,
    }));
  },

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
