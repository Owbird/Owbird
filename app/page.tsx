import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { ResearchPapers } from '@/components/research-papers'
import { BlogSection } from '@/components/blog-section'
import { Footer } from '@/components/footer'

const isProduction = process.env.NODE_ENV === "production";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      {isProduction ? null : <ResearchPapers />}
      <BlogSection />
      <Footer />
    </main>
  )
}
