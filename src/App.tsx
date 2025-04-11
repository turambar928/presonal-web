import { Github, Mail, Linkedin, User, BookOpen, Code, Briefcase } from 'lucide-react';
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
                    <User className="w-4 h-4 mr-1"/> About
                  </a>
                  <a href="#skills" className="hover:text-blue-600 flex items-center">
                    <Code className="w-4 h-4 mr-1"/> Skills
                  </a>
                  <a href="#projects" className="hover:text-blue-600 flex items-center">
                    <BookOpen className="w-4 h-4 mr-1"/> Projects
                  </a>
                  <a href="#internships" className="hover:text-blue-600 flex items-center">
                    <Briefcase className="w-4 h-4 mr-1"/> Internship
                  </a>
                  <a href="#contact" className="hover:text-blue-600 flex items-center">
                    <Mail className="w-4 h-4 mr-1"/> Contact
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
                <p className="text-gray-600 mt-2 text-base">Full-stack Developer & Software Engineer</p>
                <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  I'm a junior student majoring in Software Engineering at Tongji University.
                  Passionate about full-stack development, machine learning, computer vision,
                  natural language processing, and embedded systems.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a
                      href="#contact"
                      className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                  >
                    Get in Touch
                  </a>
                  <a
                      href="https://github.com/turambar928"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5 mr-1"/> GitHub
                  </a>
                  <a
                      href="mailto:tzf9282003@163.com"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="w-5 h-5 mr-1" /> Email
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* About Section */}
          <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              I have a strong interest in solving complex problems with code and love building impactful applications.
              I'm constantly learning and exploring new technologies.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
              <li>Linux</li>
              <li>SQL</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>TensorFlow / PyTorch</li>
              <li>OpenCV</li>
              <li>C / C++</li>
              <li>IOT</li>
            </ul>
          </section>

          {/* Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <p className="text-gray-700 mb-4">You can find my open-source and personal projects on GitHub:</p>
            <a
                href="https://github.com/turambar928"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              github.com/turambar928
            </a>
          </section>

          <section id="internships" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold mb-6">Internship</h2>

            {/* Intern 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Lab Intern</h3>
              <p className="text-base text-gray-700 mt-1">
                Cyberspace Security Laboratory, Xi'an Jiaotong University (Remote)
              </p>
              <p className="text-sm text-gray-500 mb-2">Sep 2024 – Present</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600 leading-relaxed">
                <li>
                  Participated in a government knowledge graph project, focusing on efficient construction methods for
                  low-quality corpora.
                </li>
                <li>
                  Developed a Vue.js-based visualization interface for intuitive graph presentation.
                </li>
                <li>
                  Leading a paper enhancement project leveraging large language models for automated knowledge graph
                  construction.
                </li>
              </ul>
            </div>

            {/* Intern 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Lab Intern</h3>
              <p className="text-base text-gray-700 mt-1">
                Machine Intelligence Laboratory, Tongji University (Shanghai)
              </p>
              <p className="text-sm text-gray-500 mb-2">Dec 2023 – May 2024</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-600 leading-relaxed">
                <li>
                  Participated in research on dynamic HBF architecture optimization under real-time sparse distribution.
                </li>
                <li>
                  Responsible for code maintenance and algorithm analysis and enhancement.
                </li>
              </ul>
            </div>
          </section>


          {/* Contact Section */}
          <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 mb-2">Feel free to reach out via email:</p>
            <a
                href="mailto:tzf9282003@163.com"
                className="text-blue-600 hover:underline"
            >
              tzf9282003@163.com
            </a>
          </section>
        </div>
      </div>
  );
}

export default App;
