import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/logoBellySantt.png";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function goHome() {
    setIsOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <header
        className="
          fixed inset-x-0 top-0 z-50
          flex h-16 w-full
          items-center justify-between
          border-b border-white/10
          bg-[rgba(220,20,60,0.92)]
          px-4 sm:px-5
          backdrop-blur-md
          box-border
        "
      >
        <Link
          to="/#home"
          onClick={goHome}
          aria-label="Go to home"
          className="shrink-0"
        >
          <img
            src={logo}
            alt="Logo BellySantt"
            className="
              h-11 w-11
              shrink-0
              select-none
              object-contain
              transition-transform
              duration-300
              hover:scale-110
            "
          />
        </Link>

        <Link
          to="/#home"
          onClick={goHome}
          aria-label="Go to home"
          className="
            title-font
            absolute left-1/2
            -translate-x-1/2
            whitespace-nowrap
            text-2xl sm:text-3xl
            tracking-wide
            text-white
            select-none
            transition-all
            duration-300
            hover:scale-105
          "
        >
          BellySantt
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="
            shrink-0
            rounded-full
            p-2
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/10
          "
        >
          <Menu size={34} strokeWidth={2.5} />
        </button>
      </header>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navbar;