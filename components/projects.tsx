'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Shield, Terminal, Package } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'SNetT Engine',
    year: '2025',
    category: 'Security Infrastructure',
    icon: Shield,
    description:
      'Core encryption engine powering SNetT, built for secure file packaging, CLI operations, and distributed secure workflows.',
    tags: ['Encryption', 'CLI', 'Security', 'PKG'],
    color: 'from-green-500/20 to-emerald-500/20',
    github: 'https://github.com/owbird/snett-engine',
    url: 'https://github.com/owbird/snett-engine'
  },
  {
    title: 'SNetT Desktop',
    year: '2025',
    category: 'Security & Privacy',
    icon: Shield,
    description:
      'Desktop application for secure local file encryption and controlled sharing with optional distributed access layer.',
    tags: ['Desktop App', 'Encryption', 'Privacy'],
    color: 'from-emerald-500/20 to-teal-500/20',
    github: 'https://github.com/owbird/SNetT',
    url: 'https://github.com/owbird/SNetT'
  },
  {
    title: 'ReSysTor',
    year: '2025',
    category: 'DevOps & Infrastructure',
    icon: Terminal,
    description:
      'Remote system management CLI for monitoring and controlling distributed infrastructure environments.',
    tags: ['CLI', 'Monitoring', 'DevOps', 'Go'],
    color: 'from-orange-500/20 to-red-500/20',
    github: 'https://github.com/owbird/resystor',
    url: 'https://github.com/owbird/resystor/releases'
  },
  {
    title: 'Ram Guard',
    year: '2025',
    category: 'System Utilities',
    icon: Terminal,
    description:
      'Lightweight CLI utility for monitoring and protecting system memory usage in constrained environments.',
    tags: ['CLI', 'System Monitoring', 'Performance'],
    color: 'from-red-500/20 to-pink-500/20',
    github: 'https://github.com/owbird/ram-guard',
    url: 'https://github.com/owbird/ram-guard/releases'
  },
  {
    title: 'Vercel Account Manager',
    year: '2025',
    category: 'Developer Tooling',
    icon: Terminal,
    description:
      'CLI tool for managing multiple Vercel accounts efficiently from a single development environment.',
    tags: ['CLI', 'Dev Tools', 'Automation'],
    color: 'from-blue-500/20 to-indigo-500/20',
    github: 'https://github.com/owbird/vercel-account-manager',
    url: 'https://github.com/owbird/vercel-account-manager/releases'
  },
  {
    title: 'React Utility Belt',
    year: '2024',
    category: 'Frontend Tooling',
    icon: Package,
    description:
      'Reusable React utilities package designed to accelerate frontend development workflows.',
    tags: ['React', 'NPM Package', 'Frontend', 'Utilities'],
    color: 'from-cyan-500/20 to-blue-500/20',
    github: 'https://github.com/owbird/react-utility-belt',
    url: 'https://www.npmjs.com/package/react-utility-belt'
  },
  {
    title: 'KNUST AIM API',
    year: '2024',
    category: 'API & Integration',
    icon: Package,
    description:
      'REST API improving access and integration of KNUST Academic Information Management systems.',
    tags: ['REST API', 'Integration', 'Backend'],
    color: 'from-yellow-500/20 to-orange-500/20',
    github: 'https://github.com/owbird/KNUST-AIM-API',
    url: 'https://github.com/owbird/KNUST-AIM-API'
  },
  {
    title: 'KNUST AIM Desktop',
    year: '2024',
    category: 'Desktop Application',
    icon: Package,
    description:
      'Desktop client for streamlined access to academic data within the KNUST ecosystem.',
    tags: ['Desktop App', 'Integration', 'Institutional Tech'],
    color: 'from-amber-500/20 to-yellow-500/20',
    github: 'https://github.com/owbird/KNUST-AIM-Desktop',
    url: 'https://github.com/owbird/KNUST-AIM-Desktop'
  },
  {
    title: 'Blue-DOS',
    year: '2024',
    category: 'Systems Experiment',
    icon: Terminal,
    description:
      'Experimental CLI system environment exploring low-level command execution and operating system behavior.',
    tags: ['CLI', 'Systems', 'Experimentation'],
    color: 'from-indigo-500/20 to-blue-500/20',
    github: 'https://github.com/owbird/blue-dos',
    url: 'https://github.com/owbird/blue-dos'
  },
  {
    title: 'One Dev',
    year: '2024',
    category: 'Productivity Tool',
    icon: Package,
    description:
      'Unified developer workspace focused on simplifying workflows across multiple tools and environments.',
    tags: ['Productivity', 'Desktop', 'Workflow'],
    color: 'from-purple-500/20 to-violet-500/20',
    github: 'https://github.com/owbird/One-Dev',
    url: 'https://one-dev.vercel.app'
  }
]

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Notable Projects
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Systems, security, infrastructure, and developer tooling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-px bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative h-full p-8 bg-zinc-900/80 border border-zinc-800 rounded-2xl backdrop-blur-sm hover:border-zinc-700 transition-colors duration-300 flex flex-col">

                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                      {project.year}
                    </Badge>
                  </div>

                  <p className="text-sm text-accent mb-2 font-medium">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/5 text-zinc-400 border-0 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 text-zinc-400 hover:text-white transition" />
                    </a>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 text-zinc-400 hover:text-white transition" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 mb-6">
            Explore more of my work and contributions on GitHub
          </p>

          <Button
            variant="outline"
            size="lg"
            className="border-zinc-700 hover:border-accent/50 hover:bg-accent/5 group"
            asChild
          >
            <a
              href="https://github.com/owbird"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
