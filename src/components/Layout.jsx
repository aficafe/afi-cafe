import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-10 bg-cream dark:bg-black transition-colors duration-300">
      <div className="w-full max-w-5xl border border-gold/60 dark:border-gold rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-white dark:bg-cafeBlack overflow-hidden transition-colors duration-300 flex flex-col min-h-[80vh]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
