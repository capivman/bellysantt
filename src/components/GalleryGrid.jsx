import { useEffect, useMemo, useState } from "react";
import GalleryCard from "./GalleryCard";
import galleryImages from "../data/galleryImages";

function GalleryGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all(
      galleryImages.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();

          img.src = item.image;

          img.onload = () => {
            resolve({
              ...item,
              ratio: img.width / img.height,
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
      result.push(next(normal, horizontal, vertical)); // média
      result.push(next(normal, vertical, horizontal)); // média
      result.push(next(horizontal, vertical, normal)); // grande
      result.push(next(vertical, normal, horizontal)); // pequena
      result.push(next(vertical, normal, horizontal)); // pequena
      result.push(next(vertical, normal, horizontal)); // pequena
      result.push(next(horizontal, normal, vertical)); // grande
      result.push(next(normal, vertical, horizontal)); // média
      result.push(next(normal, horizontal, vertical)); // média
      result.push(next(horizontal, vertical, normal)); // grande
      result.push(next(vertical, normal, horizontal)); // pequena
      result.push(next(vertical, normal, horizontal)); // pequena
      result.push(next(vertical, normal, horizontal)); // pequena
    }

    return result.filter(Boolean);
  }, [images]);

  function getClass(index) {
    switch (index % 13) {
      case 2:
      case 6:
      case 9:
        return "md:col-span-2 md:row-span-2";

      case 3:
      case 4:
      case 5:
      case 10:
      case 11:
      case 12:
        return "md:row-span-1";

      default:
        return "";
    }
  }

  return (
    <section className="mx-auto max-w-7xl p-6">
      <div className="grid auto-rows-[170px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
        {orderedImages.map((image, index) => (
          <GalleryCard
            key={image.id}
            image={image.image}
            className={getClass(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default GalleryGrid;