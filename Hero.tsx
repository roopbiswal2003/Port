import { ArrowRight, Code, Boxes, Cpu, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
        <div className="space-y-1 mb-8">
          <motion.p 
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hi, I'm Roop Kumar Munsun Biswal
            </span>
          </motion.h1>
          <motion.div 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1 w-24 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>

        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full Stack Developer | Problem Solver | Data Structures & Algorithms Enthusiast
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            { icon: Code, title: "Clean Code", desc: "Writing elegant, maintainable solutions" },
            { icon: Boxes, title: "Modern Stack", desc: "Using cutting-edge technologies" },
            { icon: Cpu, title: "Optimization", desc: "Building performant applications" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}