import Layout from "../components/Layout";
import FeriaHero from "../components/FeriaHero";
import FeriaCarousel from "../components/FeriaCarousel";
import ComunidadInstagram from "../components/ComunidadInstagram";

export default function Feria() {
  return (
    <Layout>
      <FeriaHero />
      <FeriaCarousel />
      <ComunidadInstagram />
    </Layout>
  );
}
