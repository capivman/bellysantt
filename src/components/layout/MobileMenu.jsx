import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import logo from "../../assets/logo/logoBellySantt.png";

function MobileMenu({ isOpen, setIsOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (section) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${section}`);
    }
  };

  const goHome = () => {
    setIsOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed inset-0 z-[60]
            flex min-h-dvh w-full
            box-border
            flex-col
            items-center
            justify-start
            overflow-x-hidden
            overflow-y-auto
            bg-black/95
            px-6
            pt-20
            backdrop-blur-xl
          "
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="
              absolute right-4 top-4
              z-20
              flex h-12 w-12
              shrink-0
              items-center justify-center
              rounded-full
              text-white
              transition-all duration-300
              hover:rotate-90
              hover:bg-white/10
            "
          >
            <X size={36} />
          </button>

          <Link
            to="/#home"
            onClick={goHome}
            aria-label="Go to home"
            className="flex flex-col items-center"
          >
            <img
              src={logo}
              alt="Logo BellySantt"
              className="
                mb-6
                h-24 w-24
                shrink-0
                select-none
                object-contain
                transition-transform
                duration-300
                hover:scale-105
              "
            />

            <h2
              className="
                title-font
                mb-12
                text-4xl
                text-white
                transition-all
                duration-300
                hover:scale-105
              "
            >
              BellySantt
            </h2>
          </Link>

          <nav className="flex w-full flex-col items-center gap-8 pb-10">
            <button
              type="button"
              onClick={() => goToSection("home")}
              className="title-font nav-link text-4xl text-white"
            >
              Início
            </button>

            <button
              type="button"
              onClick={() => goToSection("about")}
              className="title-font nav-link text-4xl text-white"
            >
              Sobre
            </button>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="title-font nav-link text-4xl text-white"
            >
              Galeria
            </Link>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="title-font nav-link text-4xl text-white"
            >
              Contato
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;