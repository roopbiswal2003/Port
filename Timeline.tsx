import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
  gradient: string;
}

const education: TimelineItem[] = [
  {
    year: '2022 - Present',
    degree: 'B.Tech in Computer Science',
    institution: 'National Institute of Technology, Rourkela',
    description: 'Currently pursuing Bachelor of Technology in Computer Science and Engineering.',
    gradient: 'from-purple-400 via-pink-500 to-red-500'
  },
  {
    year: '2019 - 2021',
    degree: 'Higher Secondary Education',
    institution: 'DAV Public School, UNIT-8, Bhubaneswar',
    description: 'Completed Higher Secondary with focus on Physics, Chemistry, Mathematics and Biology.',
    gradient: 'from-blue-400 via-cyan-500 to-teal-500'
  },
  {
    year: '2018 - 2019',
    degree: 'Secondary Education',
    institution: 'Rotary Public School, Angul',
    description: 'Completed Secondary Education with distinction.',
    gradient: 'from-green-400 via-emerald-500 to-teal-500'
  },
];

export default function Timeline() {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My academic journey and educational background
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-sm mb-4 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} font-semibold`}>
                {item.year}
              </span>
              <h3 className={`text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                {item.degree}
              </h3>
              <p className="text-purple-400 mb-4">{item.institution}</p>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}