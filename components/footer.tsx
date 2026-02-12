'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Globe, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-zinc-500 text-sm">
            © {currentYear} Owbird
          </p>

        </motion.div>
      </div>
    </footer>
  )
}