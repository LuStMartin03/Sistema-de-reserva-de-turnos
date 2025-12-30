import { MapPin, Phone, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#FCF1F3] border-t border-pink-200 py-12 px-4 flex justify-items-center w-full">
      <div className="container mx-auto max-w-6xl w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="relative h-8 w-32 mb-2">
              <span className="absolute inset-0 flex items-center text-4xl font-black tracking-tighter text-red-800">
                RNEYRA
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-yellowtail text-pink-300">
                nails
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Diseños que vibran con vos
            </p>
          </div>

          <div>
            <h4 className="text-lg text-red-800 font-semibold mb-2">Contacto</h4>
            <div className="flex space-x-4 justify-between">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>La Boca, CABA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <span>@nailsbyrneyra</span>
              </div>
            </div>
          </div>
          </div>
        <div className="border-t border-pink-200 pt-4 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} RNEYRA nails. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
