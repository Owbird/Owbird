'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'Building Scalable ML Infrastructure at Scale',
    summary: 'How we built a distributed GPU pooling system that serves 500+ engineers across Africa, handling complex scheduling and cost optimization.',
    date: 'January 2024',
  },
  {
    title: 'Real-time Data Processing: Lessons from 10M Events/Day',
    summary: 'Deep dive into the architectural decisions and trade-offs we made while building a data pipeline processing 10 million events daily.',
    date: 'December 2023',
  },
  {
    title: 'Kubernetes in Production: Beyond the Tutorials',
    summary: 'Practical insights and gotchas we encountered while deploying Kubernetes clusters handling mission-critical workloads.',
    date: 'November 2023',
  },
  {
    title: 'The Future of AI Infrastructure in Emerging Markets',
    summary: 'Exploring opportunities and challenges in building AI infrastructure tailored for developing economies.',
    date: 'October 2023',
  },
]

export function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Writing
        </motion.h2>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group p-6 border border-border rounded-xl hover:border-accent/50 hover:bg-card transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl font-bold text-foreground leading-tight">{article.title}</h3>
                <ArrowRight className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>
              <p className="text-foreground/70 mb-4 leading-relaxed">{article.summary}</p>
              <span className="text-sm text-muted-foreground">{article.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
