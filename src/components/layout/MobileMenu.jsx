import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import logo from "../../assets/logo/logoBellySantt.png";

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-start bg-black/95 pt-18 backdrop-blur-xl"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 rounded-full p-2 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/10"
          >
            <X size={36} />
          </button>

          <img
            src={logo}
            alt="Logo BellySantt"
            className="mb-6 h-28 w-28 object-contain"
          />

          <h2 className="title-font mb-14 text-4xl text-white">
            BellySantt
          </h2>

          <nav className="flex flex-col items-center gap-8">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="title-font nav-link text-4xl text-white"
            >
              Início
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="title-font nav-link text-4xl text-white"
            >
              Sobre
            </a>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="title-font nav-link text-4xl text-white"
            >
              Galeria
            </Link>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="title-font nav-link text-4xl text-white"
            >
              Contato
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;