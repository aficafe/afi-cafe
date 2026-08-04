import Layout from "../components/Layout";
import Hero from "../components/Hero";
import MiniHistoria from "../components/MiniHistoria";
import ProductosSection from "../components/ProductosSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MiniHistoria />
      <ProductosSection />
    </Layout>
  );
}
