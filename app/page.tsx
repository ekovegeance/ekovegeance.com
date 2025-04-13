
import About from "@/components/about";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto border-primary-foreground border-x">
      <Hero />
      <About />
    </div>
  );
}
