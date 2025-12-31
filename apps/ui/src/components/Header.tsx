import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16
                 flex justify-center items-center
                 border-b border-pink-200
                 bg-[#FCF1F3]/80 backdrop-blur-md"
    >
      <div className="flex justify-between items-center w-[90%]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative h-8 w-32">
            <span className="absolute inset-0 flex items-center text-4xl font-black tracking-tighter text-red-800">
              RNEYRA
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-yellowtail text-pink-400">
              nails
            </span>
          </div>
        </div>

        {/* Links desktop */}
        <nav
          className="hidden md:flex justify-center items-center
                     text-md text-red-800"
        >
          <Link to="" className="mx-5 hover:scale-105 transition-transform">
            Ver Galería
          </Link>
          <Link to="" className="mx-8 hover:scale-105 transition-transform">
            Reservar Turno
          </Link>
          <Link to="" className="mx-5 hover:scale-105 transition-transform">
            Ver Servicios
          </Link>
        </nav>

        {/* Botón login desktop */}
        <div className="hidden md:flex">
          <button
            className="flex justify-center items-center w-32 h-8 bg-red-800 rounded-2xl
                       hover:scale-105 transition-transform"
          >
            <span className="text-pink-100 font-semibold">
              Iniciar Sesión
            </span>
          </button>
        </div>

        {/* Botón menú mobile */}
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
                     text-red-800 md:hidden"
        >
          <Link
            to=""
            onClick={() => setOpen(false)}
            className="py-3 hover:font-semibold"
          >
            Ver Galería
          </Link>

          <Link
            to=""
            onClick={() => setOpen(false)}
            className="py-3 hover:font-semibold"
          >
            Reservar Turno
          </Link>

          <Link
            to=""
            onClick={() => setOpen(false)}
            className="py-3 hover:font-semibold"
          >
            Ver Servicios
          </Link>

          <button
            className="my-4 w-40 h-9 bg-red-800 rounded-2xl
                       hover:scale-105 transition-transform"
          >
            <span className="text-pink-100 font-semibold">
              Iniciar Sesión
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
