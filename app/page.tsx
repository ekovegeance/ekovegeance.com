import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import Hero from "@/components/hero";
import { CommandDialogDemo } from "@/components/command";
export default function Home() {
  return (
    <div className="container mx-auto border-zinc-200/70 dark:border-zinc-700/70 border-x ">
      <Navbar />
      <CommandDialogDemo/>  
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
