import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Hero from "@/components/hero";
import { CommandDialogDemo } from "@/components/command";
import { ModeToggle } from "@/components/mode-toggle";
export default function Home() {
  return (
    <>
      <Navbar />
      <CommandDialogDemo/>  
      <Hero />
      <About />
      <Footer />
    </>
  );
}
