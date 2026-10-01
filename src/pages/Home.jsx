import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ComprarCafeSection from "../components/ComprarCafeSection";
import AchievementBanner from "../components/AchievementBanner";
import NovedadesSection from "../components/NovedadesSection";
import MiniHistoria from "../components/MiniHistoria";
import MiniAFI from "../components/MiniAFI";
import BrandBanner from "../components/BrandBanner";
import MiniGaleria from "../components/MiniGaleria";
import StatsSection from "../components/StatsSection";
import ProductosSection from "../components/ProductosSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ComprarCafeSection />
      <AchievementBanner />
      <NovedadesSection />
      <MiniHistoria />
      <MiniAFI />
      <BrandBanner />
      <MiniGaleria />
      <StatsSection />
      <ProductosSection />
    </Layout>
  );
}
