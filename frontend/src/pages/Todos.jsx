import React from "react";
import { TodoForm } from "../features/todos/components/TodoForm";
import { TodoList } from "../features/todos/components/TodoList";
import { motion } from "framer-motion";

export function TodosPage() {
  return (
    <div className="space-y-6">
      <motion.h1
        className="text-4xl font-bold text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Todo App
      </motion.h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}