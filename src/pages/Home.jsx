import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default Home;