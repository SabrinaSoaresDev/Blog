import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { artigos } from "../../Dados/articles";

function ArticleCard({ article }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}


      className="bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-6">
        <span className="text-xs text-accent font-semibold">{article.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex justify-between items-center">
          <Link to={`/posts/${article.id}`} className="text-primary hover:underline">Leia Mais</Link>
        </div>
      </div>
    </motion.div>
  )
}
export default ArticleCard;
