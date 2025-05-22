import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useTodoStore from "./store/todoStore";

export function TodoList() {
  const { todos, fetchTodos, toggleTodo, deleteTodo, loading, error } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="space-y-4 mt-6">
      {loading && (
        <div className="flex justify-center">
          <motion.div
            className="w-8 h-8 border-4 border-t-transparent border-indigo-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
      {error && (
        <motion.p
          className="text-red-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
      {!loading && todos.length === 0 && (
        <p className="text-white text-center">No tasks yet. Add one above!</p>
      )}
      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <motion.li
            key={todo.id}
            className="flex items-start justify-between bg-white/10 p-4 rounded-lg backdrop-blur-md shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="flex-1">
              <h3
                className={`font-semibold text-lg text-white ${
                  todo.status ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.task}
              </h3>
              {todo.description && (
                <p className="text-sm text-gray-300">{todo.description}</p>
              )}
            </div>
            <div className="flex space-x-2">
              <motion.button
                onClick={() => toggleTodo(todo.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={todo.status ? "Undo task" : "Mark task as done"}
              >
                {todo.status ? "Undo" : "Done"}
              </motion.button>
              <motion.button
                onClick={() => deleteTodo(todo.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Delete task"
              >
                Delete
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
