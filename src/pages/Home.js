import { Button } from "../components/ui/Button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import TechStack from "../components/TechStack";
import ProjectCard from "../components/ProjectCard";
import AIProject from "../assets/AI_Chatbots.jpg"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Full Stack Developer
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Building digital experiences with modern technologies.
          </p>

          {/* Social Links */}
          <div className="space-x-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="mailto:nareshlokhande.dev@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce platform built with React, Prisma, and Stripe."
              image={AIProject}
              link="https://github.com"
              tags={["React", "Prisma", "Stripe"]}
            />
            <ProjectCard
              title="Task Management App"
              description="A real-time task management app with team collaboration."
              image={AIProject}
              link="https://github.com"
              tags={["React", "Node.js", "Socket.io"]}
            />
            <ProjectCard
              title="AI Chat Interface"
              description="An AI-powered chat interface with natural language processing capabilities."
              image={AIProject}
              link="https://github.com"
              tags={["OpenAI", "React", "TailwindCSS"]}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </div>
      </section>
    </div>
  );
}
