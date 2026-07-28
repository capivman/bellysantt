const images = import.meta.glob(
  "../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  }
);

const galleryImages = Object.entries(images)
  .map(([path, image]) => {
    const fileName = path.split("/").pop();

    return {
      id: fileName,
      image,
      alt: fileName
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      fileName,
    };
  })
  .sort((a, b) => b.fileName.localeCompare(a.fileName));

export default galleryImages;