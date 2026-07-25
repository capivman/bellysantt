import { useEffect, useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryLightbox from "./ui/GalleryLightbox";
import galleryImages from "../data/galleryImages";

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
            resolve({
              ...item,
              ratio: img.naturalWidth / img.naturalHeight,
            });
          };

          img.onerror = () => {
            resolve({
              ...item,
              ratio: 1,
            });
          };
        });
      })
    ).then(setImages);
  }, []);

  const orderedImages = useMemo(() => {
    const vertical = images.filter((i) => i.ratio < 0.8);
    const horizontal = images.filter((i) => i.ratio > 1.25);
    const normal = images.filter(
      (i) => i.ratio >= 0.8 && i.ratio <= 1.25
    );

    const next = (arr1, arr2, arr3) =>
      arr1.shift() || arr2.shift() || arr3.shift();

    const result = [];

    while (vertical.length || horizontal.length || normal.length) {
      result.push(next(normal, horizontal, vertical));
      result.push(next(normal, vertical, horizontal));
      result.push(next(horizontal, vertical, normal));
      result.push(next(vertical, normal, horizontal));
      result.push(next(vertical, normal, horizontal));
      result.push(next(vertical, normal, horizontal));
      result.push(next(horizontal, normal, vertical));
      result.push(next(normal, vertical, horizontal));
      result.push(next(normal, horizontal, vertical));
      result.push(next(horizontal, vertical, normal));
      result.push(next(vertical, normal, horizontal));
      result.push(next(vertical, normal, horizontal));
      result.push(next(vertical, normal, horizontal));
    }

    return result.filter(Boolean);
  }, [images]);

  function getClass(index) {
    const pattern = index % 13;

    if (pattern === 2 || pattern === 6 || pattern === 9) {
      return "col-span-2 row-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2";
    }

    if (
      pattern === 3 ||
      pattern === 4 ||
      pattern === 5 ||
      pattern === 10 ||
      pattern === 11 ||
      pattern === 12
    ) {
      return "row-span-1";
    }

    if (pattern === 1 || pattern === 7) {
      return "md:col-span-2";
    }

    if (pattern === 0 || pattern === 8) {
      return "lg:col-span-1";
    }

    return "";
  }

  function handlePrevious() {
    setSelectedIndex((current) =>
      current === 0 ? orderedImages.length - 1 : current - 1
    );
  }

  function handleNext() {
    setSelectedIndex((current) =>
      current === orderedImages.length - 1 ? 0 : current + 1
    );
  }

  return (
    <>
      <section className="mx-auto max-w-7xl p-4 sm:p-6">
        <div
          className="
            grid
            grid-flow-dense
            auto-rows-[150px]
            grid-cols-2
            gap-3
            sm:auto-rows-[180px]
            sm:gap-4
            md:auto-rows-[190px]
            md:grid-cols-3
            lg:auto-rows-[220px]
            lg:grid-cols-4
          "
        >
          {orderedImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image.image}
              className={getClass(index)}
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