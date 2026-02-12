'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, Video } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'],
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React.js', 'Next.js', 'HTML/CSS', 'Responsive Design', 'Tailwind CSS'],
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    skills: ['Node.js', 'NestJS', 'FastAPI', 'REST APIs', 'Microservices'],
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
    color: 'from-orange-500/20 to-yellow-500/20'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Google Cloud', 'Vercel', 'Docker', 'Linux', 'Git/GitHub'],
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    title: 'Additional Skills',
    icon: Wrench,
    skills: ['Video Production (VMix, OBS)', 'Technical Documentation', 'System Design'],
    color: 'from-red-500/20 to-orange-500/20'
  }
]

export function Skills() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building scalable, modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute -inset-px bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative h-full p-8 bg-zinc-900/80 border border-zinc-800 rounded-2xl backdrop-blur-sm hover:border-zinc-700 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 text-zinc-300 rounded-lg transition-colors duration-200 border border-zinc-800/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}