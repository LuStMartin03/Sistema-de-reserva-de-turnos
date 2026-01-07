import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { LogIn, Eye, Calendar, Sparkles } from "lucide-react";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center w-full bg-[#FCF1F3]">
      <Header />

      {/* Título */}
      <div className="flex flex-col items-center mt-28 md:mt-36 w-[90%]">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-pink-600 font-bold text-center">
          Salón de Uñas
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-pink-600/60 font-normal italic text-center max-w-xl mt-3 mb-5">
          Para reservar un turno debe estar logueado.
        </p>

        <Link
          to={user ? "/booking" : "/register"}
          className="flex justify-center items-center w-40 h-10 bg-red-800 rounded-full
                     hover:scale-105 transition-transform
                     text-white font-semibold"
        >
          Reservar Turno
        </Link>
      </div>

      {/* Cómo funciona */}
      <div className="flex flex-col items-center my-16 w-[90%]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-pink-600 font-bold text-center">
          ¿Cómo funciona nuestra página?
        </h2>

        <p className="text-base sm:text-lg text-pink-600/60 text-center max-w-xl mt-2">
          Aprendé a reservar turnos con facilidad.
        </p>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                     gap-6 w-full mt-8"
        >
          {/* Iniciar sesión */}
          <Card
            icon={<LogIn className="text-pink-500 h-8 w-8" />}
            step="1"
            title="Iniciá sesión"
            text="Registrate fácilmente y accedé a tu cuenta"
          />

          {/* Inspirate */}
          <Card
            icon={<Eye className="text-pink-500 h-8 w-8" />}
            step="2"
            title="Inspirate"
            text="Descubrí ideas y estilos que te encanten"
          />

          {/* Elegí servicio */}
          <Card
            icon={<Sparkles className="text-pink-500 h-8 w-8" />}
            step="3"
            title="Elegí tu servicio"
            text="Seleccioná el servicio ideal para vos"
          />

          {/* Reservá */}
          <Card
            icon={<Calendar className="text-pink-500 h-8 w-8" />}
            step="4"
            title="Reservá tu turno"
            text="Agendá tu cita en el horario que prefieras"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* Card reutilizable */
function Card({
  icon,
  step,
  title,
  text,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white border border-pink-200 rounded-2xl p-6 text-center h-full">
      <div className="flex items-center justify-center bg-pink-200 h-14 w-14 rounded-full">
        {icon}
      </div>

      <div className="flex items-center justify-center bg-pink-500 h-7 w-7 rounded-full my-4">
        <p className="text-white text-sm font-semibold">{step}</p>
      </div>

      <h3 className="text-red-800 text-lg font-semibold">{title}</h3>

      <p className="text-red-800/60 text-sm mt-2">
        {text}
      </p>
    </div>
  );
}
