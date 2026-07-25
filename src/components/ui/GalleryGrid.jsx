import { useEffect, useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryLightbox from "./GalleryLightbox";
import galleryImages from "../../data/galleryImages";

function GalleryGrid() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    Promise.all(
      galleryImages.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();

          img.src = item.image;

          img.onload = () => {
            const ratio = img.naturalWidth / img.naturalHeight;

            let orientation = "square";

            if (ratio > 1.15) {
              orientation = "landscape";
            } else if (ratio < 0.85) {
              orientation = "portrait";
            }

            resolve({
              ...item,
              ratio,
              orientation,
            });
          };

          img.onerror = () => {
            resolve({
              ...item,
              ratio: 1,
              orientation: "square",
            });
          };
        });
      })
    ).then(setImages);
  }, []);

  const orderedImages = useMemo(() => {
    const portrait = images.filter(
      (image) => image.orientation === "portrait"
    );

    const landscape = images.filter(
      (image) => image.orientation === "landscape"
    );

    const square = images.filter(
      (image) => image.orientation === "square"
    );

    const take = (array) => array.shift();

    const result = [];

    while (portrait.length || landscape.length || square.length) {
      result.push(
        take(landscape) ||
          take(square) ||
          take(portrait)
      );

      result.push(
        take(portrait) ||
          take(square) ||
          take(landscape)
      );

      result.push(
        take(square) ||
          take(landscape) ||
          take(portrait)
      );

      result.push(
        take(portrait) ||
          take(landscape) ||
          take(square)
      );

      result.push(
        take(landscape) ||
          take(square) ||
          take(portrait)
      );

      result.push(
        take(portrait) ||
          take(square) ||
          take(landscape)
      );
    }

    return result.filter(Boolean);
  }, [images]);

  function getClass(image, index) {
    const pattern = index % 12;

    /*
      LANDSCAPE
      Horizontal images get wider spaces.
    */
    if (image.orientation === "landscape") {
      if (pattern === 0 || pattern === 4 || pattern === 8) {
        return "col-span-2 row-span-1";
      }

      if (pattern === 2) {
        return "col-span-2 row-span-2";
      }

      return "col-span-1 row-span-1";
    }

    /*
      PORTRAIT
      Vertical images get taller spaces.
    */
    if (image.orientation === "portrait") {
      if (pattern === 1 || pattern === 5 || pattern === 9) {
        return "col-span-1 row-span-2";
      }

      if (pattern === 3) {
        return "col-span-2 row-span-2";
      }

      return "col-span-1 row-span-1";
    }

    /*
      SQUARE
      Square images stay balanced.
    */
    if (pattern === 6 || pattern === 10) {
      return "col-span-2 row-span-2";
    }

    return "col-span-1 row-span-1";
  }

  function handlePrevious() {
    setSelectedIndex((current) =>
      current === 0
        ? orderedImages.length - 1
        : current - 1
    );
  }

  function handleNext() {
    setSelectedIndex((current) =>
      current === orderedImages.length - 1
        ? 0
        : current + 1
    );
  }

  return (
    <>
      <section className="mx-auto max-w-7xl p-4 sm:p-6">
        <div
          className="
            grid
            grid-flow-dense
            grid-cols-2
            auto-rows-[150px]
            gap-3

            sm:auto-rows-[180px]
            sm:gap-4

            md:grid-cols-3
            md:auto-rows-[190px]

            lg:grid-cols-4
            lg:auto-rows-[220px]
          "
        >
          {orderedImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image.image}
              className={getClass(image, index)}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </section>

      <GalleryLightbox
        images={orderedImages}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
}

export default GalleryGrid;