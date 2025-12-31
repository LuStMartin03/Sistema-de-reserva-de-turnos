import Footer from "../components/Footer";
import Header from "../components/Header";

import { Clock, Brush, Droplet } from "lucide-react";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FCF1F3]">
      <Header />

      {/* Servicios */}
      <section className="flex flex-col items-center mb-10 mt-16 w-[90%]">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-pink-600 font-bold text-center mt-8 mb-8">
          Nuestros Trabajos
        </h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full mt-5">
          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
          />

          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
            
          />

          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
        
          />

          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
        
          />
          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
          />

          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
            
          />

          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
        
          />

          <div
            className="w-full rounded-2xl border border-pink-200 h-52 bg-pink-200"
        
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}