import React, { useState } from "react";
import { motion } from "framer-motion";
import useTodoStore from "./store/todoStore";

export function TodoForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const error = useTodoStore((state) => state.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({ title, desc });
      setTitle("");
      setDesc("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white/20 rounded-lg backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        className="flex-1 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title..."
      />
      <textarea
        className="flex-1 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Task description..."
        rows="3"
      />
      <motion.button
        type="submit"
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Task
      </motion.button>
      {error && (
        <motion.p
          className="text-red-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </motion.form>
  );
}
