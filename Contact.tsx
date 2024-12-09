import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"
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
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss your project and see how we can work together
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-4 rounded-lg bg-gray-800/50 group-hover:bg-purple-500/10 transition-colors">
                    <Mail className="text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">roopbiswal2003@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-4 rounded-lg bg-gray-800/50 group-hover:bg-pink-500/10 transition-colors">
                    <Phone className="text-pink-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">7735786783</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-4 rounded-lg bg-gray-800/50 group-hover:bg-red-500/10 transition-colors">
                    <MapPin className="text-red-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">NIT Rourkela, Sundergarh</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.form 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your message"
                  ></motion.textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            className="text-gray-400 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Made with <Heart className="text-red-500 animate-pulse" size={16} /> by Roop Biswal
          </motion.p>
        </div>
      </footer>
    </>
  );
}