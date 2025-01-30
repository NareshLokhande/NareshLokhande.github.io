// src/pages/Blog.js
import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg text-gray-400">
          Thoughts, ideas, and experiences
        </p>
      </header>
      <section className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">Latest Posts</h2>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">
            Understanding AI & Machine Learning
          </h3>
          <p className="text-gray-400">
            A deep dive into the world of AI and ML.
          </p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Exploring Java Development</h3>
          <p className="text-gray-400">
            The journey through Java programming and tools.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
