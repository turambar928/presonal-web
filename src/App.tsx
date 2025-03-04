import { Github, Mail, Linkedin, User, BookOpen, Code, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600 font-['Bubblegum_Sans']">Personal Website</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-['Quicksand'] text-lg">About Myself</a>
              <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors font-['Quicksand'] text-lg">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors font-['Quicksand'] text-lg">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-['Quicksand'] text-lg">Contact Info</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Banner */}
      <div className="bg-white shadow-md mt-4 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img 
              className="h-64 w-full object-cover md:w-64" 
              src="/images/lgd.png"
              alt="Computer workspace" 
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold font-['Quicksand']">Personal Website</div>
            <h1 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-['Bubblegum_Sans']">
              Welcome to TZF's world
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 font-['Quicksand']">
              This is my personal website, here I'll share my skills, projects and experiences
            </p>
            <div className="mt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact me
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
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">About Myself</h2>
            <p className="mt-4 text-lg text-gray-500">
              Hello! I am a developer who loves technology. I enjoy creating useful applications and websites to solve practical problems.
              I am constantly learning new technologies and striving to improve my skills. In my free time, I enjoy reading technical books and participating in open source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 bg-white shadow-md mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Code className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">Skills</h2>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="bg-indigo-50 rounded-lg px-6 pb-8">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Frontend</h3>
                    <p className="mt-5 text-base text-gray-500">
                      HTML, CSS, JavaScript, React, Tailwind CSS
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="bg-indigo-50 rounded-lg px-6 pb-8">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Backend</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Node.js, Express, MongoDB, SQL
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="bg-indigo-50 rounded-lg px-6 pb-8">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Others</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Git, Docker, AWS, TypeScript
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
            <BookOpen className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">My Projects</h2>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="bg-indigo-50 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    className="w-full h-48 object-cover" 
                    src="/images/project1.jpg"
                    alt="Project 1" 
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Personal Blog System</div>
                    <p className="text-gray-700 text-base">
                      A personal blog system developed with React and Node.js, supporting article publishing, comments, and user management.
                    </p>
                    <div className="mt-4">
                      <a 
                        href="https://github.com/yourusername/blog-project" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        View Project <Github className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    className="w-full h-48 object-cover" 
                    src="/images/project2.jpg"
                    alt="Project 2" 
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">E-commerce Website</div>
                    <p className="text-gray-700 text-base">
                      An e-commerce platform based on React and Express, including product display, shopping cart, payment, and other features.
                    </p>
                    <div className="mt-4">
                      <a 
                        href="https://github.com/yourusername/ecommerce-project" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        View Project <Github className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
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
            <Mail className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-['Bubblegum_Sans']">Contact Me</h2>
            <p className="mt-4 text-lg text-gray-500">
              If you have any questions or collaboration opportunities, please feel free to contact me.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://github.com/turambar928" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            {/* Contact Form */}
            <div className="mt-12 max-w-lg mx-auto">
              <form className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Please enter your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Please enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder="Please enter your message"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> © {new Date().getFullYear()} My Personal Website
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;