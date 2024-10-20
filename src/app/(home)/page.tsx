import Menu from "@/components/Menu";
import Hero from "@/components/home/Hero";
import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";

export const metadata: Metadata = generate_metadata({
  title: "Owbird",
  desc: `
  I speak to computers.
  Sometimes they listen.
  Sometimes.
  `,
  image: "https://owbird.site/assets/img/owbird.png",
});

function App() {
  return (
    <main>
      <Hero />

      <Menu />
    </main>
  );
}

export default App;
