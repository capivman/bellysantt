import { motion } from "framer-motion";

function GalleryCard({ image, className = "", onClick }) {
  return (
    <motion.div
      onClick={() => onClick?.(image)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: .35 }}
      className={`relative cursor-pointer overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/0 transition hover:bg-black/15" />
    </motion.div>
  );
}

export default GalleryCard;