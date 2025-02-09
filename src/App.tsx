import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Download,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Yash Darne</h1>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600"
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-gray-700 hover:text-blue-600"
              >
                Education
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#experience"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              Experience
            </a>
            <a
              href="#education"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              Education
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Full Stack Java Developer
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Building robust and scalable applications with modern
                technologies
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/YASH4207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yash-darne23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ydarne8@gmail.com"
                  className="p-2 text-gray-600 hover:text-blue-600"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="./SAVE_20240219_110016.jpg"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a passionate Full Stack Java Developer with extensive
              experience in building enterprise-level applications. My expertise
              includes Spring Boot, React, and cloud technologies. I love
              solving complex problems and creating efficient, scalable
              solutions that make a real impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technical Skills
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    Java, Spring Boot, Hibernate
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    React, TypeScript, Node.js
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    MySQL, PostgreSQL, MongoDB
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    Docker, Kubernetes, AWS
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Soft Skills
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    Team Leadership
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    Problem Solving
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    Communication
                  </li>
                  <li className="flex items-center">
                    <ExternalLink size={16} className="mr-2 text-blue-600" />
                    Agile Methodologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Blood Bank Information system
              </h3>
              <p className="text-gray-600">JAVA • 2023 </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  • Software solution designed to efficiently manage blood
                  donation, storage, and distribution processes in blood banks.
                </li>
                <li>
                  • It ensures the availability of safe and adequate blood
                  supplies while minimizing wastage and improving accessibility
                  for patients and hospitals.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Threading Inventory Manager
              </h3>
              <p className="text-gray-600">JAVA • 2023</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  • Java-based project designed to streamline and automate the
                  management of thread spools in an inventory system
                </li>
                <li>
                  • This project serves as an excellent learning experience for
                  Java developers by integrating core Java concepts such as
                  multithreading, database interaction, and user interface
                  design. </li>
                  <li>• It can also be extended with additional features like
                  barcode scanning, cloud sync, or mobile app integration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Senior Full Stack Developer
              </h3>
              <p className="text-gray-600">Tech Company • 2020 - Present</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Led development of microservices-based architecture</li>
                <li>• Implemented CI/CD pipelines using Jenkins</li>
                <li>• Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Java Developer
              </h3>
              <p className="text-gray-600">
                Software Solutions Inc • 2018 - 2020
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Developed and maintained Spring Boot applications</li>
                <li>• Optimized database queries and improved performance</li>
                <li>• Collaborated with cross-functional teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Bachelor's of Computer Application
            </h3>
            <p className="text-gray-600">
              Sant Gadge Baba Amravati University • 2020 - 2024
            </p>
            <p className="mt-4 text-gray-600">
              Specialized in Software Engineering with focus on distributed
              systems and cloud computing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-4">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:ydarne8@gmail.com"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Mail size={20} className="mr-2" />
                    ydarne8@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/yash-darne23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Yash Darne. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;