"use client";

import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Understanding AI & Machine Learning",
      excerpt: "A deep dive into the world of AI and ML.",
      date: "2024-02-01",
    },
    {
      title: "Exploring Java Development",
      excerpt: "The journey through Java programming and tools.",
      date: "2024-01-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1f2e] text-gray-900 dark:text-white transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">My Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Thoughts, ideas, and experiences
          </p>
        </motion.header>

        <section className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-[#232936] rounded-lg p-6 shadow-lg hover:shadow-xl dark:hover:bg-[#2a3241] transition-all"
            >
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
