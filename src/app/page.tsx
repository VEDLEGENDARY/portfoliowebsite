import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Background } from "@/components/background";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#080808]">
      <Hero />
      <Projects />
      <Background />
      <Contact />
    </main>
  );
}
