import { create } from "zustand";
import api from "../../../../api/api";

const useTodoStore = create((set, get) => ({
  todos: [],
  error: null,
  loading: false,

  fetchTodos: async () => {
    try {
      set({ loading: true });
      const res = await api.get("todo-items/");
      set({ todos: res.data.results, error: null });
    } catch (err) {
      set({ error: "Failed to fetch todos" });
    } finally {
      set({ loading: false });
    }
  },

  addTodo: async ({ title, desc }) => {
    if (!title.trim()) {
      set({ error: "Title is required" });
      return;
    }

    try {
      await api.post("todo-items/", {
        task: title,
        description: desc,
      });
      await get().fetchTodos();
    } catch (err) {
      set({ error: "Failed to add todo" });
    }
  },

  deleteTodo: async (id) => {
    try {
      await api.delete(`todo-items/${id}/`);
      await get().fetchTodos();
    } catch (err) {
      set({ error: "Failed to delete todo" });
    }
  },

  toggleTodo: async (id) => {
    const todo = get().todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      await api.patch(`todo-items/${id}/`, {
        status: !todo.status,
      });
      await get().fetchTodos();
    } catch (err) {
      set({ error: "Failed to update status" });
    }
  },
}));

export default useTodoStore;
