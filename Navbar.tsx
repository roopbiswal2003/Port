import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <motion.span 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">👨‍💻</span>
            </motion.span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">About</a>
              <a href="#education" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Education</a>
              <a href="#coding-profiles" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Coding Profiles</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              href="https://github.com/roopbiswal2003" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/roop-kumar-munsun-biswal-80a50b291/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Home</a>
            <a href="#about" className="block text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">About</a>
            <a href="#education" className="block text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Education</a>
            <a href="#coding-profiles" className="block text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Coding Profiles</a>
            <a href="#projects" className="block text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-purple-400 px-3 py-2 transition-colors">Contact</a>
            <div className="flex space-x-4 px-3 py-2">
              <a 
                href="https://github.com/roopbiswal2003" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/roop-kumar-munsun-biswal-80a50b291/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}