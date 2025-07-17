import React from "react";
import { TodosPage } from "./pages/Todos";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TodosPage />
      </motion.div>
    </div>
  );
}

export default App;
