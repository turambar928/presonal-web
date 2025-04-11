import { Github, Mail, Linkedin, User, BookOpen, Code } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 font-['Inter'] relative">
        <ParticleBackground />
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="text-xl font-bold tracking-tight text-gray-900">
                  Tao Zifu
                </div>
                <div className="flex space-x-8 text-sm font-medium">
                  <a href="#about" className="hover:text-blue-600 flex items-center">
                    <User className="w-4 h-4 mr-1" /> About
                  </a>
                  <a href="#skills" className="hover:text-blue-600 flex items-center">
                    <Code className="w-4 h-4 mr-1" /> Skills
                  </a>
                  <a href="#projects" className="hover:text-blue-600 flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" /> Projects
                  </a>
                  <a href="#contact" className="hover:text-blue-600 flex items-center">
                    <Mail className="w-4 h-4 mr-1" /> Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Header Section */}
          <header className="bg-white mt-6 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                    className="h-80 w-full object-cover md:w-full"
                    src="/images/portrait.jpg"
                    alt="Tao Zifu"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center md:w-2/3">
                <h1 className="text-3xl font-bold">Tao Zifu</h1>
                <p className="text-gray-600 mt-2 text-base">
                  Full-stack Developer & Problem Solver
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  Software engineer with a strong background in web development, experienced in building scalable front-end and back-end applications using modern technologies like React, Node.js, and TypeScript.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a
                      href="#contact"
                      className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                  >
                    Get in Touch
                  </a>
                  <a
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-1" /> GitHub
                  </a>
                  <a
                      href="https://linkedin.com/in/your-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5 mr-1" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Sections Placeholder */}
          <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m a software developer with 3+ years of experience building efficient and maintainable web applications. I enjoy turning complex problems into simple, beautiful solutions.
            </p>
          </section>

          <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-sm">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>TailwindCSS / SCSS</li>
              <li>MongoDB / PostgreSQL</li>
              <li>Git / CI/CD</li>
            </ul>
          </section>

          <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <p className="text-gray-700">Coming soon: a showcase of my recent work.</p>
          </section>

          <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-700">Feel free to reach out via email at <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a></p>
          </section>
        </div>
      </div>
  );
}

export default App;
