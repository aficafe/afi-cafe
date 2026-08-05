import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Afi from "./pages/Afi";
import Productos from "./pages/Productos";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/afi" element={<Afi />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
