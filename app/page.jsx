import Header from "@/components/Header";
import SideRail from "@/components/SideRail";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Freelance from "@/components/Freelance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <SideRail />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Freelance />
      <Contact />
      <Footer />
    </>
  );
}
