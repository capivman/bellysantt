function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 flex min-h-screen flex-col items-center justify-start px-8 pt-24"
    >
      <h2 className="title-font mb-8 text-center text-4xl text-white">
        Contato
      </h2>

      <p className="mb-12 max-w-md text-center text-lg leading-8 text-white/80">
        Se interessou pelo meu trabalho?
        <br />
        Então me chama no WhatsApp para transformarmos suas ideias em memórias inesquecíveis.
      </p>

<a
  href="https://wa.me/55SEUNUMERO"
  target="_blank"
  rel="noreferrer"
  className="
    title-font
    rounded-xl
    border-3
    border-[#25D366]
    bg-[#25D366]/10
    px-8
    py-4
    text-2xl
    text-white
    shadow-[0_0_18px_rgba(37,211,102,.8)]
    transition-all
    duration-300
    hover:scale-105
    hover:bg-[#25D366]
    hover:shadow-[0_0_30px_rgba(37,211,102,.6)]
    active:scale-95
  "
>
  WhatsApp
</a>
    </section>
  );
}

export default Contact;