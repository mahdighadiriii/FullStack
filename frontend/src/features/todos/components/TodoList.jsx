import React from "react";
import { motion } from "framer-motion";
import useTodoStore from "./store/todoStore";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <ul className="space-y-4 mt-6">
      {todos.map((todo, index) => (
        <motion.li
          key={todo.id}
          className="flex items-start justify-between bg-white/10 p-4 rounded-lg backdrop-blur-md shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex-1">
            <h3
              className={`font-semibold text-lg text-white ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </h3>
            {todo.description && (
              <p className="text-sm text-gray-300">{todo.description}</p>
            )}
          </div>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => toggleTodo(todo.id)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {todo.completed ? "Undo" : "Done"}
            </motion.button>
            <motion.button
              onClick={() => deleteTodo(todo.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Delete
            </motion.button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}