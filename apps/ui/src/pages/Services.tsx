import Footer from "../components/Footer";
import Header from "../components/Header";
import { Clock, MessageCircleWarning, Brush, Droplet } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FCF1F3]">
      <Header />

      {/* Servicios */}
      <section className="flex flex-col items-center mb-10 mt-16 w-[90%]">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-pink-600 font-bold text-center mt-8">
          Nuestros Servicios
        </h2>
        <div className="flex flex-row text-base sm:text-lg md:text-xl text-pink-600/60 font-normal italic text-center max-w-xl mt-2 mb-5">
            <MessageCircleWarning />
            <p className="ml-2">
                Los horarios son una sugerencia, rena tarda lo que ella quiera.
            </p>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-5">
          <Card
            icon={<Clock className="text-pink-500 w-7 h-7" />}
            service="Semi Permanente"
            price="$10.000"
            time="60"
            text="Duración prolongada con acabado natural y brillante."
          />

          <Card
            icon={<Brush className="text-pink-500 w-7 h-7" />}
            service="Soft Gel"
            price="$20.000"
            time="90"
            text="Uñas más largas y resistentes con efecto liviano."
          />

          <Card
            icon={<Droplet className="text-pink-500 w-7 h-7" />}
            service="Kapping"
            price="$30.000"
            time="75"
            text="Refuerzo ideal para uñas frágiles o quebradizas."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
function Card({
  icon,
  price,
  service,
  text,
  time,
}: {
  icon: React.ReactNode;
  price: string;
  service: string;
  text: string;
  time: string;
}) {
  return (
    <div
      className="flex flex-col justify-between
                 bg-white border border-pink-200
                 rounded-2xl p-6 h-full
                 hover:shadow-lg transition"
    >
      {/* Icono */}
      <div className="flex items-center justify-center bg-pink-200 h-14 w-14 rounded-2xl">
        {icon}
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="text-red-800 text-lg sm:text-xl font-semibold">
          {service}
        </h3>

        <p className="text-red-800/60 text-sm mt-2">
          {text}
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-pink-200" />

      {/* Footer */}
      <div className="flex justify-between items-center text-sm sm:text-base">
        <span className="flex flex-row text-red-800 font-medium gap-2">
          <Clock /><p>{time} min</p>
        </span>

        <span className="text-pink-600 font-bold text-lg">
          {price}
        </span>
      </div>
    </div>
  );
}
