import { useState } from "react";

import bellysantt from "../assets/images/about/bellysantt.png";
import bellyzinha from "../assets/images/about/bellyzinha.gif";

function About() {
  const [showSpeech, setShowSpeech] = useState(false);

  function handleClick() {
    setShowSpeech(true);

    setTimeout(() => {
      setShowSpeech(false);
    }, 1000);
  }

  return (
    <section
      id="about"
      className="scroll-mt-16 flex min-h-screen flex-col items-center justify-start px-8 py-16"
    >
      <div className="relative mb-5">
<div className="absolute -bottom-0 -left-6">
  <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C]/40 blur-xl" />

  {showSpeech && (
    <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
      <div className="whitespace-nowrap rounded-2xl bg-white px-4 py-1 text-sm font-semibold text-black shadow-xl">
        Oi❣️ Posso te fotografar?
      </div>

      <div className="mx-auto h-3 w-3 -translate-y-1 rotate-45 bg-white" />
    </div>
  )}

  <img
    src={bellyzinha}
    alt="Bellyzinha"
    onClick={handleClick}
    className="relative w-30 cursor-pointer select-none"
  />
</div>

        <img
          src={bellysantt}
          alt="Belly Santt"
          onClick={handleClick}
          className="mb-5 h-64 w-64 cursor-pointer rounded-full border-4 border-[#DC143C] object-cover shadow-[0_0_30px_rgba(220,20,60,.7)]"
        />

        <div className="absolute -bottom-0 -left-6">
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DC143C]/40 blur-xl" />

          <img
            src={bellyzinha}
            alt="Bellyzinha"
            onClick={handleClick}
            className="relative w-30 cursor-pointer select-none"
          />
        </div>
      </div>

      <h2 className="title-font mb-5 text-center text-4xl text-white">
        Belly Santt
      </h2>

      <p className="max-w-md text-center text-lg leading-8 text-white/80">
        Transformo momentos em lembranças inesquecíveis através da fotografia.
        Cada ensaio é pensado para capturar emoções verdadeiras, detalhes únicos
        e histórias que merecem ser eternizadas.
      </p>

      <a
        href="https://instagram.com/bellysantt"
        target="_blank"
        rel="noreferrer"
        className="title-font mt-5 rounded-xl border-2 border-[#DC143C] bg-[#DC143C]/10 px-6 py-3 text-xl text-white transition-all duration-300 hover:scale-105 hover:bg-[#DC143C] hover:shadow-[0_0_25px_rgba(220,20,60,.7)]"
      >
        Instagram
      </a>
    </section>
  );
}

export default About;