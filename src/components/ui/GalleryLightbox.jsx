import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const currentImage = images[currentIndex];

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [currentIndex, onClose, onPrevious, onNext]);

  function handleTouchStart(event) {
    touchStartX.current = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event) {
    touchEndX.current = event.changedTouches[0].clientX;

    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 50;

    if (Math.abs(distance) < minimumSwipeDistance) {
      return;
    }

    if (distance > 0) {
      onNext();
    } else {
      onPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <AnimatePresence>
      {currentImage && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>

          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => event.stopPropagation()}
          >
            <img
              src={currentImage.image}
              alt={currentImage.alt}
              draggable="false"
              className="max-h-[90vh] max-w-[90vw] select-none rounded-lg object-contain shadow-2xl"
            />
          </motion.div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default GalleryLightbox;