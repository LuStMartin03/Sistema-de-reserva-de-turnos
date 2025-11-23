import Footer from "../components/Footer";
import Header from "../components/Header";
import { LogIn, Eye, Calendar, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-[#FCF1F3]">
      <Header />

      {/* Titulo */}
      <div className="flex flex-col justify-center items-center mt-36 w-[90%]">
        <h1 className="text-7xl text-pink-500 font-bold text-center">Tu belleza, nuestra pasión</h1>
        <p className="text-xl text-black/60 font-normal text-center w-1/2 m-5">Transforma tus manos con nuestros servicios de manicura y nail art. Reserva tu cita y descubre la experiencia de belleza que mereces.</p>
        <button className="flex justify-center items-center w-40 h-10 bg-pink-500 rounded-2xl
                              hover:scale-105 transition-transform
                              text-white font-semibold">
          Reservar Turno
        </button>
      </div>

      {/* Como funciona */}
      <div className="flex flex-col justify-center items-center my-36 w-[90%]">
        <h1 className="text-4xl text-black font-bold text-center">¿Como Funciona nuestra Pagina?</h1>
        <p className="text-lg text-black/60 font-normal text-center w-1/2 m-2">Aprende a reservar turnos con facilidad.</p>
        <div className="flex flex-row justify-center items-center w-full mt-5">
          {/* Iniciar Sesión */}
          <div className="flex flex-col justify-center items-center w-1/4 h-72 bg-white border border-pink-200 rounded-2xl m-3">
            <div className="flex justify-center items-center text-center bg-pink-200 h-14 w-14 rounded-full">
              <LogIn className="text-pink-500 h-8 w-8"/>
            </div>
            <div className="flex justify-center items-center text-center bg-pink-500 h-7 w-7 rounded-full my-10">
              <p className="text-white text-md font-semibold">1</p>
            </div>
            <h2 className="text-black text-xl font-semibold">Iniciá Sesión</h2>
            <p className="w-2/3 text-black/60 text-sm font-normal mt-2 text-center">Registrate facilmente y accede a tu cuenta</p>
          </div>
          {/* Inspirate */}
          <div className="flex flex-col justify-center items-center w-1/4 h-72 bg-white border border-pink-200 rounded-2xl m-3">
            <div className="flex justify-center items-center text-center bg-pink-200 h-14 w-14 rounded-full">
              <Eye className="text-pink-500 h-8 w-8"/>
            </div>
            <div className="flex justify-center items-center text-center bg-pink-500 h-7 w-7 rounded-full my-10">
              <p className="text-white text-md font-semibold">2</p>
            </div>
            <h2 className="text-black text-xl font-semibold">Inspirate</h2>
            <p className="w-2/3 text-black/60 text-sm font-normal m-2 text-center">Descubrí ideas y estilos que te encanten</p>
          </div>
          {/* Elegí tu servicio */}
          <div className="flex flex-col justify-center items-center w-1/4 h-72 bg-white border border-pink-200 rounded-2xl m-3">
            <div className="flex justify-center items-center text-center bg-pink-200 h-14 w-14 rounded-full">
              <Sparkles className="text-pink-500 h-8 w-8"/>
            </div>
            <div className="flex justify-center items-center text-center bg-pink-500 h-7 w-7 rounded-full my-10">
              <p className="text-white text-md font-semibold">3</p>
            </div>
            <h2 className="text-black text-xl font-semibold">Elegí tu servicio</h2>
            <p className="w-2/3 text-black/60 text-sm font-normal m-2 text-center">Seleccioná el servicio ideal para vos</p>
          </div>
          {/* Reservá tu Turno */}
          <div className="flex flex-col justify-center items-center w-1/4 h-72 bg-white border border-pink-200 rounded-2xl m-3">
            <div className="flex justify-center items-center text-center bg-pink-200 h-14 w-14 rounded-full">
              <Calendar className="text-pink-500 h-8 w-8"/>
            </div>
            <div className="flex justify-center items-center text-center bg-pink-500 h-7 w-7 rounded-full my-10">
              <p className="text-white text-md font-semibold text-center">3</p>
            </div>
            <h2 className="text-black text-xl font-semibold">Reservá tu Turno</h2>
            <p className="w-2/3 text-black/60 text-sm font-normal m-2 text-center">Agendá tu cita en el horario que prefieras</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}