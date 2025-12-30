/* import { Sparkles } from "lucide-react" */
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="flex justify-center items-center h-16 w-full border-b border-pink-200
                    fixed top-0 left-0 right-0 z-50 bg-pink-700/80 backdrop-blur-md">
      <div className="flex justify-center items-center w-[90%]">
        <div className="flex justify-start items-center group">
          {/* <div className="flex justify-center items-center bg-transparent group-hover:rotate-12 duration-300 transition-transform">
            <Sparkles className="text-pink-200 h-7 w-7 mr-2"/>
          </div> */}
          <div className="relative h-8 w-32">
              <span className="absolute inset-0 flex items-center text-4xl font-black tracking-tighter text-red-800">
                RNEYRA
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-yellowtail text-pink-200">
                nails
              </span>
            </div>
        </div>
        <div className="flex flex-rox justify-center items-center w-1/2 mx-20
                        text-md text-pink-200
                        ">
          <Link to="" className="mx-5 hover:scale-105 transition-transform">Ver Galería</Link>
          <Link to="" className="mx-14 hover:scale-105 transition-transform">Reservar Turno</Link>
          <Link to="" className="mx-5 hover:scale-105 transition-transform">Ver Servicios</Link>
        </div>
        <div className="flex justify-end items-center">
          <button className="flex justify-center items-center w-32 h-8 bg-red-800 rounded-2xl
                              hover:scale-105 transition-transform">
            <h1 className="text-pink-200 font-semibold">Iniciar Sesión</h1>
          </button>
        </div>
      </div>
    </div>
  );
}