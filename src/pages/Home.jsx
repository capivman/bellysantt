import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default Home;