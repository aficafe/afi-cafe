import Layout from "../components/Layout";
import EventosTimeline from "../components/EventosTimeline";
import GlobalCoffeeFairSection from "../components/GlobalCoffeeFairSection";
import CoffeeFestSection from "../components/CoffeeFestSection";

/* Línea fina dorada para separar un evento de otro */
function Divisor() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}

/* Orden: resumen en línea de tiempo y, debajo, el detalle de cada evento
   del más reciente al más antiguo (igual que la línea de tiempo). */
export default function Eventos() {
  return (
    <Layout>
      <EventosTimeline />
      <Divisor />
      <GlobalCoffeeFairSection />
      <Divisor />
      <CoffeeFestSection />
    </Layout>
  );
}
