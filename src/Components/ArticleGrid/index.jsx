import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ArticleGrid = ({ articles }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {articles.map((article, index) => {
        const path =
          article.title === "React para Iniciantes"
            ? "/react-para-iniciantes"
            : "#";

        return (
          <Link key={index} to={path}>
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default ArticleGrid;
