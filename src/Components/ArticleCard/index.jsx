import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ArticleCard({ article }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-xs text-accent font-semibold">{article.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">5 min read</span>
          <button className="text-primary hover:underline">Ler mais →</button>
        </div>
      </div>
    </motion.div>
  )
}
export default ArticleCard;
