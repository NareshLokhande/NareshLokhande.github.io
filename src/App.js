// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
        {/* Navigation Bar */}
        <nav className="w-full bg-gray-800 p-4 mb-8">
          <div className="flex justify-around text-lg">
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-400">
              Blog
            </Link>
            <Link to="/skills" className="text-white hover:text-gray-400">
              Skills
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
