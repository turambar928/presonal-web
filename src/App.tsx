import { Github, Mail, Linkedin, User, BookOpen, Code, Heart } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 relative">
      <ParticleBackground />
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-['Bubblegum_Sans']">
                TZF's Space 
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="nav-link group">
                <span className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 font-['Quicksand'] text-lg flex items-center">
                  <User className="h-5 w-5 mr-1" /> About
                </span>
              </a>
              <a href="#skills" className="nav-link group">
                <span className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 font-['Quicksand'] text-lg flex items-center">
                  <Code className="h-5 w-5 mr-1" /> Skills
                </span>
              </a>
              <a href="#projects" className="nav-link group">
                <span className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 font-['Quicksand'] text-lg flex items-center">
                  <BookOpen className="h-5 w-5 mr-1" /> Projects
                </span>
              </a>
              <a href="#contact" className="nav-link group">
                <span className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300 font-['Quicksand'] text-lg flex items-center">
                  <Mail className="h-5 w-5 mr-1" /> Contact
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Banner */}
      <div className="bg-white shadow-lg mt-4 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
        <div className="md:flex">
          <div className="md:flex-shrink-0 relative group">
            <img 
              className="h-80 w-full object-cover md:w-80 transform group-hover:scale-110 transition-transform duration-500" 
              src="/images/protrait.jpg"
              alt="Profile" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent font-['Quicksand']">
              Welcome to My Space
            </div>
            <h1 className="mt-2 text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:text-5xl font-['Bubblegum_Sans']">
              Hi, I'm Tao Zifu 
            </h1>
            <p className="mt-4 text-xl text-gray-500 font-['Quicksand']">
              A passionate developer who loves to create and innovate
            </p>
            <div className="mt-8 flex space-x-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Me 👋
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-blue-500 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300"
              >
                View Projects 🚀
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <section id="about" className="py-12 bg-white shadow-md mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <User className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">About Me</h2>
            <p className="mt-4 text-lg text-gray-500">
              Hello! 👋 I am a junior student at <span className="font-bold text-indigo-600">Tongji University</span> majoring in 
              <span className="font-bold text-indigo-600"> Software Engineering</span> in Computer Science department. 
              I enjoy <span className="font-bold text-indigo-600">full stack development</span> 💻 and creating useful applications 
              and websites to solve practical problems.✨
              
              I also have a passion for handling 
              <span className="font-bold text-indigo-600"> natural language processing</span> 🤖, 
              <span className="font-bold text-indigo-600"> machine learning</span> 🧠, 
              <span className="font-bold text-indigo-600"> embedded development</span> 🔧, and other fields. Currently, I'm studying 
              <span className="font-bold text-indigo-600"> Knowledge Graph</span> and 
              <span className="font-bold text-indigo-600"> Large Language Model</span> 🌟 and writing a paper about it. 📝
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 bg-white shadow-md mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Code className="mx-auto h-12 w-12 text-pink-500" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">
               My Skills 
            </h2>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl px-6 pb-8 shadow-lg border-2 border-pink-100">
                    <div className="text-4xl mb-2">👨‍💻</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 tracking-tight font-['Bubblegum_Sans']">Full Stack development</h3>
                    <p className="mt-5 text-base text-gray-600">
                      <span className="text-pink-600 font-semibold">Frontend:</span> Vue, React, JavaScript, HTML, CSS<br/>
                      <span className="text-purple-600 font-semibold">Backend:</span> Node.js, Python, Java, C++, C#, SQL
                    </p>
                  </div>
                </div>

                <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-6 pb-8 shadow-lg border-2 border-blue-100">
                    <div className="text-4xl mb-2">🛠️</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 tracking-tight font-['Bubblegum_Sans']">Dev Tools</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Git, Docker, AWS, TypeScript
                    </p>
                  </div>
                </div>

                <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl px-6 pb-8 shadow-lg border-2 border-green-100">
                    <div className="text-4xl mb-2">🤖</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 tracking-tight font-['Bubblegum_Sans']">AI & NLP</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Machine Learning, NLP, Knowledge Graph, LLMs
                    </p>
                  </div>
                </div>

                <div className="pt-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl px-6 pb-8 shadow-lg border-2 border-orange-100">
                    <div className="text-4xl mb-2">🔮</div>
                    <h3 className="mt-6 text-lg font-medium text-gray-900 tracking-tight font-['Bubblegum_Sans']">IoT & Embedded</h3>
                    <p className="mt-5 text-base text-gray-600">
                      Embedded Systems, Internet of Things
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 bg-white shadow-md mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-rose-500" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">
              ✨ My Projects ✨
            </h2>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <div className="group bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      src="/images/canteen.png"
                      alt="Project 1" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-white bg-opacity-90">
                    <div className="font-bold text-xl mb-3 text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                      🍽️ Cafeteria Takeaway System
                    </div>
                    <p className="text-gray-600 text-base mb-4 line-clamp-3">
                      A personal blog system developed with vue Java SQL, targeting cafeteria administrators, food delivery users, and couriers.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-rose-100 text-rose-600">Vue</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600">Java</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">SQL</span>
                      </div>
                      <a 
                        href="https://github.com/turambar928/database-project-website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-rose-500 hover:bg-rose-600 transition-colors duration-300"
                      >
                        View <Github className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      src="/images/aviation.jpg"
                      alt="Project 2" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-white bg-opacity-90">
                    <div className="font-bold text-xl mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      ✈️ Aviation Meal Management
                    </div>
                    <p className="text-gray-600 text-base mb-4 line-clamp-3">
                      Provide airlines with a deep learning based meal prediction system to reduce food waste
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">Python</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">YOLOv5</span>
                      </div>
                      <a 
                        href="https://github.com/turambar928/softeware-engineering-project" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                      >
                        View <Github className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      src="/images/IOT.png"
                      alt="Project 3" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-white bg-opacity-90">
                    <div className="font-bold text-xl mb-3 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                      🌡️ IoT MQTT Project
                    </div>
                    <p className="text-gray-600 text-base mb-4 line-clamp-3">
                      A regional temperature, humidity, and air pressure data system based on MQTT protocol.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-teal-100 text-teal-600">IoT</span>
                        <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600">MQTT</span>
                      </div>
                      <a 
                        href="https://github.com/turambar928/IOT-project-based-on-MQTT" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-300"
                      >
                        View <Github className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Projects Link */}
              <div className="mt-16 text-center">
                <p className="text-xl text-gray-600 mb-6 font-['Bubblegum_Sans']">Wanna see more? ✨</p>
                <a 
                  href="https://github.com/turambar928?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Let's find out... <Github className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section id="papers" className="py-12 bg-white shadow-md mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="mx-auto h-12 w-12 text-violet-500" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">
              📚 Research Papers 📚
            </h2>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8">
                {/* Paper 1 */}
                <div className="group bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg transform hover:scale-102 transition-all duration-300">
                  <div className="p-8 bg-white bg-opacity-90">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                          🔍 Knowledge Graph Construction and Application in Specific Domain
                        </h3>
                        <p className="text-gray-600 text-base mb-4">
                          A research paper focusing on the construction and application of knowledge graphs in specific domains, 
                          exploring methods for automatic knowledge extraction and graph construction.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 text-sm rounded-full bg-violet-100 text-violet-600">Knowledge Graph</span>
                          <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-600">NLP</span>
                          <span className="px-3 py-1 text-sm rounded-full bg-pink-100 text-pink-600">Deep Learning</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-4">📅 Expected Publication: 2025</span>
                          <span>📍 Under Review</span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <a 
                          href="#" 
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-violet-500 hover:bg-violet-600 transition-colors duration-300"
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Paper is currently under review. Will be available soon!');
                          }}
                        >
                          Preview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* More Papers Link */}
                <div className="mt-8 text-center">
                  <p className="text-lg text-gray-600 italic">
                    More research papers coming soon... 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-white shadow-md mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="mx-auto h-12 w-12 text-rose-500" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">
              ✨ Contact Info ✨
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              {/* GitHub */}
              <a 
                href="https://github.com/turambar928" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <Github className="h-8 w-8 text-gray-700 group-hover:text-black transition-colors duration-300" />
                  <span className="mt-3 text-gray-600 group-hover:text-gray-900 font-medium">GitHub</span>
                  <span className="mt-1 text-sm text-gray-500">@turambar928</span>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:tzf9282003@163.com" 
                className="group bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-rose-100"
              >
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 text-rose-500 group-hover:text-rose-600 transition-colors duration-300" />
                  <span className="mt-3 text-gray-600 group-hover:text-gray-900 font-medium">Email</span>
                  <span className="mt-1 text-sm text-gray-500">tzf9282003@163.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/zhifeng-tang-4b2692297/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border-2 border-blue-100"
              >
                <div className="flex flex-col items-center">
                  <Linkedin className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
                  <span className="mt-3 text-gray-600 group-hover:text-gray-900 font-medium">LinkedIn</span>
                  <span className="mt-1 text-sm text-gray-500">turambar928</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-rose-500" /> © {new Date().getFullYear()} My Personal Website
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;