import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Why from "./components/Why";
import About from "./components/About";
import Products from "./components/Products";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="mesh min-h-screen text-ink">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Why />
        <About />
        <Products />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
