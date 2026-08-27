import Layout from "../components/Layout";
import HistoriaSection from "../components/HistoriaSection";
import LogrosSection from "../components/LogrosSection";
import CoffeeFestSection from "../components/CoffeeFestSection";
import MisionVisionSection from "../components/MisionVisionSection";

export default function Historia() {
  return (
    <Layout>
      <HistoriaSection />
      <LogrosSection />
      <CoffeeFestSection />
      <MisionVisionSection />
    </Layout>
  );
}