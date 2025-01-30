import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    // This is the outermost wrapper that applies the gradient background to the entire page
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white flex flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold leading-tight">
          Naresh Lokhande
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          Java Developer | AI Enthusiast
        </p>
      </header>

      {/* About Section */}
      <section className="w-full max-w-2xl text-center mb-10 bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate Java developer exploring AI and AI tools development.
          I enjoy building efficient solutions and learning cutting-edge
          technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-4xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold">HTML to PDF Converter</h3>
            <p className="text-gray-400">
              A Java-based tool using Flying Saucer to convert HTML to PDFs.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold">AI-Powered Chatbot</h3>
            <p className="text-gray-400">
              An AI chatbot built with NLP techniques and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact</h2>
        <div className="flex space-x-8 justify-center mt-4">
          <a
            href="https://github.com/NareshLokhande"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/NareshLokhande"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:naresh@example.com"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}
