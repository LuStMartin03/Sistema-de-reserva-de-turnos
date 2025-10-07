import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nails Studio</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Tu destino de belleza y cuidado profesional de uñas. Más de 10 años embelleciendo manos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Av. Santa Fe 1234, CABA, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@nailstudio.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Lunes a Viernes: 9:00 - 20:00</p>
              <p>Sábados: 10:00 - 18:00</p>

              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nails Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
