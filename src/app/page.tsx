import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Background } from "@/components/background";
import { Contact } from "@/components/contact";
import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      {/* Inline script prevents flash of wrong theme before hydration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var t = localStorage.getItem('vp-theme') || 'dark';
              document.documentElement.setAttribute('data-theme', t);
            } catch(e) {}
          `,
        }}
      />
      <Preloader />
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Projects />
        <Background />
        <Contact />
      </main>
    </>
  );
}
