import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash.replace("#", "");

    const timeout = setTimeout(() => {
      if (id) {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return;
        }
      }

      if (pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;