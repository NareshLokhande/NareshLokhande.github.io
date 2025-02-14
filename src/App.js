import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container px-4 md:px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </main>
          <Contact/>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

// import { Button } from "./components/ui/Button";
// import { Github, Linkedin, Mail, Twitter } from "lucide-react";
// import ContactForm from "./components/ContactForm";
// import ProjectCard from "./components/ProjectCard";
// import TechStack from "./components/TechStack";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "./context/ThemeContext";

// export default function App() {
//   return (
//     <ThemeProvider>
//       <div className="min-h-screen bg-background">
//         <Navbar />

//           <main className="container px-4 md:px-6">
//             <section id="about" className="py-12 md:py-24 lg:py-32">
//               <div className="container px-4 md:px-6">
//                 <div className="flex flex-col items-center justify-center space-y-4 text-center">
//                   <div className="space-y-2">
//                     <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                       Full Stack Developer
//                     </h1>
//                     <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                       Building digital experiences with modern technologies.
//                       Focused on creating elegant solutions to complex problems.
//                     </p>
//                   </div>

//                   <div className="space-x-4">
//                     <a
//                       href="https://github.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button variant="outline" size="icon">
//                         <Github className="h-4 w-4" />
//                         <span className="sr-only">GitHub</span>
//                       </Button>
//                     </a>
//                     <a
//                       href="https://linkedin.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button variant="outline" size="icon">
//                         <Linkedin className="h-4 w-4" />
//                         <span className="sr-only">LinkedIn</span>
//                       </Button>
//                     </a>
//                     <a
//                       href="https://twitter.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button variant="outline" size="icon">
//                         <Twitter className="h-4 w-4" />
//                         <span className="sr-only">Twitter</span>
//                       </Button>
//                     </a>
//                     <a href="mailto:nareshlokhande.dev@gmail.com">
//                       <Button variant="outline" size="icon">
//                         <Mail className="h-4 w-4" />
//                         <span className="sr-only">Email</span>
//                       </Button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <section id="projects" className="py-12 md:py-24 lg:py-32">
//               <div className="container px-4 md:px-6">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
//                   Projects
//                 </h2>
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   <ProjectCard
//                     title="E-commerce Platform"
//                     description="A full-stack e-commerce platform built with React, Prisma, and Stripe integration."
//                     image="/assets/placeholder.png" // Adjust path
//                     link="https://github.com"
//                     tags={["React", "Prisma", "Stripe"]}
//                   />
//                   <ProjectCard
//                     title="Task Management App"
//                     description="A real-time task management application with team collaboration features."
//                     image="/assets/placeholder.png"
//                     link="https://github.com"
//                     tags={["React", "Node.js", "Socket.io"]}
//                   />
//                   <ProjectCard
//                     title="AI Chat Interface"
//                     description="An AI-powered chat interface with natural language processing capabilities."
//                     image="/assets/placeholder.png"
//                     link="https://github.com"
//                     tags={["OpenAI", "React", "TailwindCSS"]}
//                   />
//                 </div>
//               </div>
//             </section>

//             <section className="py-12 md:py-24 lg:py-32">
//               <div className="container px-4 md:px-6">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
//                   Tech Stack
//                 </h2>
//                 <TechStack />
//               </div>
//             </section>

//             <section id="contact" className="py-12 md:py-24 lg:py-32">
              // <div className="container px-4 md:px-6">
              //   <div className="mx-auto max-w-2xl">
              //     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              //       Get in Touch
              //     </h2>
              //     <ContactForm />
              //   </div>
              // </div>
//             </section>

//           </main>
//         <Footer />
//       </div>
//     </ThemeProvider>
//   );
// }
