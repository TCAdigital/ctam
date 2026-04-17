import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Counters from "@/components/Counters";
import ActionAreas from "@/components/ActionAreas";
import Course from "@/components/Course";
import Testimonials from "@/components/Testimonials";
import Involve from "@/components/Involve";
import Agenda from "@/components/Agenda";
import Gallery from "@/components/Gallery";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function Home() {
  return (
    <>
      <FloatingWidgets />
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Counters />
        <ActionAreas />
        <Course />
        <Testimonials />
        <Involve />
        <Agenda />
        <Gallery />
        <LocationMap />
      </main>
      <Footer />
    </>
  );
}
