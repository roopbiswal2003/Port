import { motion } from 'framer-motion';
import { Code2, Award, Trophy, FileText } from 'lucide-react';

export default function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      icon: Code2,
      link: "https://leetcode.com/u/dark_ninja2003/",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      image: "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
    },
    {
      name: "GeeksforGeeks",
      icon: Trophy,
      link: "https://www.geeksforgeeks.org/user/dark_ninja2003/",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
    },
    {
      name: "Codeforces",
      icon: Award,
      link: "https://codeforces.com/profile/roopbiswal2003",
      gradient: "from-blue-400 via-indigo-500 to-purple-500",
      image: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png"
    },
    {
      name: "Certificates",
      icon: FileText,
      link: "https://drive.google.com/drive/folders/1ePFVXfRGmahfw-l92eylcAEqrPLjLaT3",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Coding Profiles
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Check out my problem-solving journey across different platforms
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <div className="flex flex-col items-center">
                <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${profile.gradient}`}>
                  <profile.icon className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
                </div>
                <p className="text-gray-400">View Profile →</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}