import { Github, Mail, Linkedin, BookOpen, Code, Briefcase, FolderOpen } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 text-gray-900 font-['Inter'] relative">
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
                  <a href="#education" className="hover:text-blue-600 flex items-center">
                    <BookOpen className="w-4 h-4 mr-1"/> Education
                  </a>
                  <a href="#internships" className="hover:text-blue-600 flex items-center">
                    <Briefcase className="w-4 h-4 mr-1"/> Internship
                  </a>
                  <a href="#projects" className="hover:text-blue-600 flex items-center">
                    <FolderOpen className="w-4 h-4 mr-1"/> Projects
                  </a>
                  <a href="#skills" className="hover:text-blue-600 flex items-center">
                    <Code className="w-4 h-4 mr-1"/> Skills
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
                <p className="text-gray-600 mt-2 text-base">Software Engineer</p>
                <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  I am a junior undergraduate student pursuing a Bachelor's degree in Software Engineering 
                  at Tongji University. My research interests focus on artificial intelligence, particularly 
                  in natural language processing and large language models. I have gained valuable research 
                  experience through internships at leading institutions including the Chinese Academy of Sciences 
                  and Xi'an Jiaotong University, and have participated in academic exchange programs at the 
                  University of Oxford.
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

          {/* Education Section */}
          <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Education</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            {/* 本科教育 */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Undergraduate Student</h3>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Current
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Software Engineering, School of Computer Science and Technology, Tongji University
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Shanghai · Sep 2022 – Jun 2026 (Expected)
              </p>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Currently a junior student with focus on full-stack development and AI technologies
                </li>
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Coursework includes algorithms, data structures, machine learning, and software engineering
                </li>
              </ul>
            </div>

            {/* 访问学者 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Visiting Scholar</h3>
                </div>
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  2024
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                University of Oxford
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Oxford, UK · Jul 2024 – Aug 2024
              </p>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Participated in advanced research programs and academic exchanges
                </li>
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Gained international academic experience and cross-cultural research perspectives
                </li>
              </ul>
            </div>
          </section>



                    <section id="internships" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Internship</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-teal-500"></div>
            </div>

            {/* Intern 1 - 中科院 */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Research Intern</h3>
                </div>
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Current
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Chinese Information Processing Laboratory, Institute of Software Chinese Academy of Sciences
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Beijing · Jul 2025 – Present
              </p>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  [to be added]
                </li>
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  [to be added]
                </li>
              </ul>
            </div>

            {/* Intern 2 - 西安交大 */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Research Intern</h3>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Current
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Cyberspace Security Laboratory, Xi'an Jiaotong University
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Remote · Sep 2024 – Present
              </p>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Participated in a government knowledge graph project, focusing on efficient construction methods for
                  low-quality corpora.
                </li>
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Developed a Vue.js-based visualization interface for intuitive graph presentation.
                </li>
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Leading a paper enhancement project leveraging large language models for automated knowledge graph
                  construction using MCP server.
                </li>
              </ul>
            </div>

            {/* Intern 3 - 同济大学 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Research Intern</h3>
                </div>
                <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  2023-2024
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Machine Intelligence Laboratory, Tongji University
              </p>
              <p className="text-sm text-gray-600 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Shanghai · Dec 2023 – May 2024
              </p>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Participated in research on dynamic HBF architecture optimization under real-time sparse distribution.
                </li>
                <li className="text-sm flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2"></span>
                  Responsible for code maintenance and algorithm analysis and enhancement.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Projects</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Open Source Projects</h3>
                </div>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I maintain and contribute to various open-source projects, focusing on AI, NLP, and web development. 
                These projects demonstrate my technical skills and commitment to sharing knowledge with the community.
              </p>
              <div className="flex items-center space-x-4">
                <a
                    href="https://github.com/turambar928"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
                <span className="text-gray-500 text-sm font-medium">github.com/turambar928</span>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI & Machine Learning */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">AI & Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">NLP</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">LLM</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">TensorFlow</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">PyTorch</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">OpenCV</span>
                </div>
              </div>

              {/* Programming Languages */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100">Python</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100">C / C++</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100">SQL</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100">TypeScript</span>
                </div>
              </div>

              {/* Tools & Systems */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Tools & Systems</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-100">Linux</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-100">Git</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-100">Docker</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
            </div>
            <p className="text-gray-700 mb-8 text-center">
              I'm always open to discussing research opportunities, collaborations or projects. 
              Feel free to reach out through any of the following channels:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Contact */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Primary Contact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-3" />
                    <a href="mailto:tzf9282003@163.com" className="text-blue-600 hover:underline font-medium">
                      tzf9282003@163.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-4 h-4 text-gray-500 mr-3" />
                    <a href="https://github.com/turambar928" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      github.com/turambar928
                    </a>
                  </div>
                </div>
              </div>

              {/* Academic Contact */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Academic Contact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-3" />
                    <a href="mailto:2253323@tongji.edu.cn" className="text-blue-600 hover:underline font-medium">
                      2253323@tongji.edu.cn
                    </a>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-gray-600">Tongji University Official Email</span>
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-900">Current Status</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Available for research internships</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Open to collaboration projects</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Based in Beijing, China</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Graduating in 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="mt-8 text-center bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-100">
              <p className="text-gray-600">
                💡 I typically respond to emails within 24-48 hours during business days
              </p>
            </div>
          </section>
        </div>
      </div>
  );
}

export default App;
