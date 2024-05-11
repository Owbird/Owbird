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
  image: "",
});

function App() {
  return (
    <main>
      <Hero />
    </main>
  );
}

export default App;
