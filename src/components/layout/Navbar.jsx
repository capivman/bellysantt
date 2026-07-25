import { useState } from "react";
import { Menu } from "lucide-react";

import logo from "../../assets/logo/logoBellySantt.png";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[rgba(220,20,60,0.92)] px-5 backdrop-blur-md">

        <img
          src={logo}
          alt="Logo BellySantt"
          className="h-11 w-11 object-contain select-none"
        />

        <h1 className="title-font absolute left-1/2 -translate-x-1/2 text-3xl tracking-wide text-white select-none">
          BellySantt
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
        >
          <Menu size={34} strokeWidth={2.5} />
        </button>
      </header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;