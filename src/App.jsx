import { Routes, Route } from "react-router-dom";

import ScrollToHash from "./components/ScrollToHash";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;