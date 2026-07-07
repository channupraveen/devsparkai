import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Founder from "@/components/home/Founder";
import Process from "@/components/home/Process";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Founder />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
