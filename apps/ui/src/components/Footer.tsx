import { MapPin, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FCF1F3] border-t border-pink-200 py-12 px-4 w-full">
      <div className="mx-auto max-w-6xl w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Marca */}
          <div>
            <div className="relative h-8 w-32 mb-2">
              <span className="absolute inset-0 flex items-center text-4xl font-black tracking-tighter text-red-800">
                RNEYRA
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-yellowtail text-pink-400">
                nails
              </span>
            </div>
            <p className="text-black/60 leading-relaxed">
              Diseños que vibran con vos
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg text-red-800 font-semibold mb-4">
              Contacto
            </h4>

            <div
              className="flex flex-col gap-4
                         sm:flex-row sm:justify-between"
            >
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-800" />
                <span className="text-black/70">La Boca, CABA</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-red-800" />
                <span className="text-black/70">+54 11 1234-5678</span>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 flex-shrink-0 text-red-800" />
                <span className="text-black/70">@nailsbyrneyra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-200 pt-4 text-center text-black/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} RNEYRA nails. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
