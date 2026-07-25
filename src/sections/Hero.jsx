import { Link } from "react-router-dom";

import HeroSlider from "../components/HeroSlider";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-start px-6 pt-25"
    >
      <h2 className="title-font mb-15 max-w-sm text-center text-3xl leading-tight text-white drop-shadow-lg">
        Eternize seus momentos através das minhas lentes!
      </h2>

      <div className="mb-15">
        <HeroSlider />
      </div>

      <Link
        to="/gallery"
        className="
          title-font
          rounded-xl
          border-3
          border-[#DC143C]
          bg-[#DC143C]/10
          px-6
          py-3
          text-2xl
          text-white
          shadow-[0_0_18px_rgba(220,20,60,.6)]
          transition-all
          duration-300
          hover:scale-105
          hover:bg-[#DC143C]
          hover:shadow-[0_0_30px_rgba(220,20,60,.8)]
          active:scale-95
        "
      >
        Galeria Completa
      </Link>
    </section>
  );
}

export default Hero;