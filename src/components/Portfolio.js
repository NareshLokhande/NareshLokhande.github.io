// src/components/Portfolio.js
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center p-8"
      style={{
        backgroundImage: 'url("https://via.placeholder.com/1500x1000")',
      }}
    >
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-shadow-lg">Naresh Lokhande</h1>
        <p className="text-lg text-gray-400">Java Developer | AI Enthusiast</p>
      </header>

      {/* About Section */}
      <section className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          I'm a passionate Java developer exploring AI and AI tools development.
          I enjoy building efficient solutions and learning cutting-edge
          technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">HTML to PDF Converter</h3>
            <p className="text-gray-400">
              A Java-based tool using Flying Saucer to convert HTML to PDFs.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI-Powered Chatbot</h3>
            <p className="text-gray-400">
              An AI chatbot built with NLP techniques and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <div className="flex space-x-4">
          <a
            href="https://github.com/NareshLokhande"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/NareshLokhande"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:naresh@example.com"
            className="text-gray-400 hover:text-white"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}
