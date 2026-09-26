import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { ResearchPapers } from '@/components/research-papers'
import { BlogSection } from '@/components/blog-section'
import { Footer } from '@/components/footer'

const showResearch = process.env.NODE_ENV !== "production";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Projects index="001" />
      {showResearch ? <ResearchPapers index="002" /> : null}
      <BlogSection index={showResearch ? "003" : "002"} />
      <Footer />
    </main>
  )
}
