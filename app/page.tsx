import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import AskGDG from "@/components/AskGDG";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Team />
        <Faq />
      </main>
      <Footer />
      <AskGDG />
    </>
  );
}
