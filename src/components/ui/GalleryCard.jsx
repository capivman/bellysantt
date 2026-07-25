import { motion } from "framer-motion";

function GalleryCard({ image, className = "", onClick }) {
  return (
    <motion.div
      onClick={() => onClick?.(image)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.015 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-900 ${className}`}
    >
      <motion.img
        src={image}
        alt=""
        loading="lazy"
        whileHover={{ scale: 1.08 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 bg-black/25"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
      />
    </motion.div>
  );
}

export default GalleryCard;