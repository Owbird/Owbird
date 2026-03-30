import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { BlogSection } from '@/components/blog-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <BlogSection />
      <Footer />
    </main>
  )
}
