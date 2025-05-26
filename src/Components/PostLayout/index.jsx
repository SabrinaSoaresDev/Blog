// src/Components/PostLayout.jsx
import React from "react";

const PostLayout = ({ title, children }) => {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">{title}</h1>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </article>
    </main>
  );
};

export default PostLayout;
