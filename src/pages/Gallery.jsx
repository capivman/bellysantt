import Navbar from "../components/layout/Navbar";
import GalleryGrid from "../components/GalleryGrid";

function Gallery() {
  return (
    <>
      <Navbar />

      <main className="pt-18">

        <GalleryGrid />
      </main>
    </>
  );
}

export default Gallery;