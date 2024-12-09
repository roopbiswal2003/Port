import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  gradient: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Wanderlust Ventures',
    description: 'Developed a travel management system enabling users to search destinations, transportation, accommodation and book reservations via a user-friendly interface. Integrated real-time APIs for flights and hotels, interactive maps, and customizable itineraries, including user reviews and recommendations based on travel history.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/roopbiswal2003/Wanderlust-Ventures',
    demo: 'https://wanderlust-ventures.netlify.app/home',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800'
  },
  {
    title: 'Space Website',
    description: 'Developed a visually captivating website on space exploration, enhancing visitor retention and setting new usability standards. Created engaging content on the universe, planets, and space missions, boosting user engagement and increasing average time spent on the site.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
    github: 'https://github.com/roopbiswal2003/space-app',
    demo: 'https://spaceverse-app.netlify.app/',
    gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    title: 'Game Website',
    description: 'Developed an interactive, visually engaging web-based gaming platform, attracting many users from all over the world. Features include game discovery, user profiles, and real-time multiplayer capabilities.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
    github: 'https://github.com/roopbiswal2003/gaming-app',
    demo: 'https://gamezone-app.netlify.app/',
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e'
  },
  {
    title: 'Fitlife Master',
    description: 'Developed a fully functional gym website that significantly increased member engagement and reduced administrative tasks, enhancing overall operational efficiency. Features include membership management, class scheduling, and progress tracking.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/roopbiswal2003/Gym-app',
    demo: 'https://gym-apps.netlify.app/',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my latest work and personal projects that showcase my skills and passion for development
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              layoutId={`project-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}