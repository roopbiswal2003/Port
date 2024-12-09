import { Code2, Database, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Developer working"
              className="relative rounded-lg w-full transform transition-all duration-500 hover:scale-[1.02]"
            />
          </motion.div>
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a dedicated Full Stack Developer with a strong focus on building dynamic and user-centric web applications. 
              Proficient in React, Node.js, and cutting-edge web technologies, I thrive on crafting efficient, scalable solutions 
              to tackle complex challenges. My approach combines technical expertise with creative problem-solving to deliver 
              impactful digital experiences.
            </motion.p>
            <div className="space-y-6">
              {[
                {
                  Icon: Code2,
                  title: "Frontend Development",
                  skills: "React, TypeScript, Tailwind CSS, Next.js",
                  color: "purple",
                  delay: 0.4
                },
                {
                  Icon: Database,
                  title: "Backend Development",
                  skills: "Node.js, Express, PostgreSQL, MongoDB",
                  color: "blue",
                  delay: 0.6
                },
                {
                  Icon: Cpu,
                  title: "DevOps & Tools",
                  skills: "Docker, AWS, Git, CI/CD",
                  color: "pink",
                  delay: 0.8
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-${item.color}-500 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                >
                  <item.Icon className={`w-8 h-8 text-${item.color}-400 mb-4`} />
                  <h3 className={`font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-${item.color}-400 to-${item.color === 'purple' ? 'pink' : item.color === 'blue' ? 'cyan' : 'red'}-500`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.skills}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}