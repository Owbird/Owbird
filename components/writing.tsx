import { ArrowUpRight } from 'lucide-react'

const logs = [
  {
    title: 'Architecting Verifiable Infrastructure for Secure Computing',
    summary: 'Analysis of attestation mechanisms and hardware security modules in distributed environments.',
    date: '2024.12.04',
  },
  {
    title: 'Zero-Trust Networking in Emerging Market Infrastructure',
    summary: 'Evaluating the trade-offs of identity-based perimeter security in bandwidth-constrained regions.',
    date: '2024.10.12',
  },
  {
    title: 'Performance Optimization of Cryptographic Primitives in Go',
    summary: 'Benchmarking and optimizing AES-GCM and ChaCha20-Poly1305 for low-power edge nodes.',
    date: '2024.08.20',
  }
]

export function Writing() {
  return (
    <section id="journal" className="py-24 px-6 border-t border-zinc-900 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-12">
          Technical Journal
        </h2>

        <div className="space-y-4">
          {logs.map((log, index) => (
            <div
              key={index}
              className="group py-6 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 border-b border-zinc-900 last:border-0"
            >
              <div className="text-xs font-mono text-zinc-600 w-24 shrink-0">
                {log.date}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors inline-flex items-center gap-2">
                  {log.title}
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                  {log.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
