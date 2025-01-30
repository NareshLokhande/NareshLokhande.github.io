// src/pages/Skills.js
import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Skills</h1>
        <p className="text-lg text-gray-400">
          Technologies I’m proficient with
        </p>
      </header>
      <section className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-semibold mb-4">Technical Skills</h2>
        <ul className="text-gray-400">
          <li>Java</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>AI/ML</li>
          <li>HTML, CSS, Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
