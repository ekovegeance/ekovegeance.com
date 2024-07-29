import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Hero from "@/components/hero";
import { CommandDialogDemo } from "@/components/command";
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
