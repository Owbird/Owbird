import { Navbar } from "@/components/navbar";
import { HeroObservatory } from "@/components/sections/hero-observatory";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResearchPapersSection } from "@/components/sections/research-section";
import { GitHubSection } from "@/components/sections/github-section";
import { WritingSection } from "@/components/sections/writing-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <main className="relative bg-[#050608] text-foreground min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <HeroObservatory />
      <ProjectsSection index="001" />
      <ResearchPapersSection index="002" />
      <GitHubSection />
      <WritingSection index="003" />
      <AboutSection index="004" />
      <ContactSection index="005" />
    </main>
  );
}
