import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Menu, X, UserCircle2Icon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16
                 flex justify-center items-center
                 border-b border-pink-200
                 bg-[#FCF1F3]/80 backdrop-blur-md"
    >
      <div className="flex justify-between items-center w-[90%]">
        <Link
          to="/home"
          className="flex items-center hover:scale-105 transition-transform"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-8 w-32">
            <span className="absolute inset-0 flex items-center text-4xl font-black tracking-tighter text-red-800">
              RNEYRA
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-yellowtail text-pink-400">
              nails
            </span>
          </div>
        </Link>

        {/* Links desktop */}
        <nav
          className="hidden md:flex justify-center items-center
                     text-md text-red-800"
        >
          <Link to="/aboutus" className="mx-5 hover:scale-105 transition-transform">
            Sobre Nosotros
          </Link>
          <Link to="/booking" className="mx-8 hover:scale-105 transition-transform">
            Reservar Turno
          </Link>
          <Link to="/services" className="mx-5 hover:scale-105 transition-transform">
            Ver Servicios
          </Link>
        </nav>

        {/* Botón login desktop */}
        {user ? (
          <div className="hidden md:flex">
            <Link
              to="/profile"
              className="flex justify-center items-center"
            >
              <UserCircle2Icon className="w-9 h-9 text-red-800 hover:scale-105 transition-transform" strokeWidth={1}/>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex">
            <Link
              to="/register"
              className="flex justify-center items-center w-32 h-8 bg-red-800 rounded-2xl
                         hover:scale-105 transition-transform"
          >
            <span className="text-pink-100 font-semibold">
              Iniciar Sesión
            </span>
          </Link>
        </div>
        )}

        <button
          className="md:hidden text-red-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable mobile */}
      {open && (
        <div
          className="absolute top-16 left-0 w-full
                     bg-[#FCF1F3] border-b border-pink-200
                     flex flex-col items-center
                     text-red-800 md:hidden p-2"
        >
          {/* Home mobile */}
          <Link
            to="/aboutus"
            onClick={() => setOpen(false)}
            className="py-2 hover:font-semibold"
          >
            Sobre Nosotros
          </Link>

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className="py-2 hover:font-semibold"
          >
            Reservar Turno
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="py-2 hover:font-semibold"
          >
            Ver Servicios
          </Link>

          {user ? (
            <Link
              to="/profile"
              className="flex justify-center items-center"
            >
              <UserCircle2Icon className="w-9 h-9 text-red-800 hover:scale-105 transition-transform" strokeWidth={1}/>
            </Link>
          ) : (
            <Link
              to="/register"
              className="flex justify-center items-center my-4 w-40 h-9 bg-red-800 rounded-2xl
                         hover:scale-105 transition-transform"
            >
            <span className="text-pink-100 font-semibold">
              Iniciar Sesión
            </span>
          </Link>
          )}
        </div>
      )}
    </header>
  );
}
