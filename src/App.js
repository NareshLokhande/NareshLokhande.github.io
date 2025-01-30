// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Blog from "./pages/Blog";
import Skills from "./pages/Skills";

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
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
