/* import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Booking() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#FCF1F3]">
      <Header />

      <main className="flex flex-1 items-center justify-center w-full px-4">
        <div
          className="
            w-full max-w-2xl
            bg-gradient-to-br from-white to-pink-50
            border border-pink-200
            rounded-3xl
            shadow-xl
            p-8 sm:p-12
            text-center
            animate-fade-in
          "
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-pink-600 font-bold">
            Agenda cerrada por el momento
          </h1>

          <p className="mt-4 text-sm sm:text-base text-red-800/60">
            Muy pronto vamos a habilitar nuevos turnos! <br />
            Seguinos en Instagram para enterarte primero.
          </p>

          <div className="my-6 h-px w-full bg-pink-200" />

          <p className="text-xs sm:text-sm text-red-800/50">
            Gracias por tu paciencia
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
 */
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type ServiceKey = "semi" | "soft" | "kapping";

const SERVICES: Record<
  ServiceKey,
  { name: string; duration: number; price: string }
> = {
  semi: {
    name: "Semi Permanente",
    duration: 60,
    price: "$10.000",
  },
  soft: {
    name: "Soft Gel",
    duration: 90,
    price: "$20.000",
  },
  kapping: {
    name: "Kapping",
    duration: 75,
    price: "$30.000",
  },
};

export default function Booking() {
  // mock del usuario logueado
  const user = {
    name: "Lucía Saint Martin",
    email: "lucia@email.com",
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState<ServiceKey | "">("");
  const [success, setSuccess] = useState(false);

  const selectedService = service ? SERVICES[service] : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FCF1F3]">
      <Header />

      <div className="w-[90%] max-w-3xl mt-24 mb-16">
        <div className="bg-white rounded-3xl border border-pink-200 p-6 sm:p-10 shadow-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 text-center mb-8">
            Reservar turno
          </h1>

          {/* Datos del cliente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-xs text-red-800/60">Nombre</label>
              <div className="mt-1 px-4 py-2 rounded-xl bg-pink-100/50 text-red-800">
                {user.name}
              </div>
            </div>

            <div>
              <label className="text-xs text-red-800/60">Email</label>
              <div className="mt-1 px-4 py-2 rounded-xl bg-pink-100/50 text-red-800">
                {user.email}
              </div>
            </div>
          </div>

          {/* Form */}
          {!success ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {/* Fecha */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-pink-700 mb-1">
                  Día
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-pink-200
                           focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Hora */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-pink-700 mb-1">
                  Hora de inicio
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-pink-200
                           focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              {/* Servicio */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-pink-700 mb-1">
                  Servicio
                </label>
                <select
                  value={service}
                  onChange={(e) =>
                    setService(e.target.value as ServiceKey)
                  }
                  required
                  className="rounded-xl border border-pink-200 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
                >
                  <option value="">Seleccionar servicio</option>
                  <option value="semi">Semi Permanente</option>
                  <option value="soft">Soft Gel</option>
                  <option value="kapping">Kapping</option>
                </select>
              </div>

              {/* Info del servicio */}
              {selectedService && (
                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 text-sm text-pink-800">
                  <p className="font-semibold mb-1">
                    {selectedService.name}
                  </p>
                  <p>
                    Duración aproximada:{" "}
                    <span className="font-medium">
                      {selectedService.duration} min
                    </span>
                  </p>
                  <p>
                    Precio estimado:{" "}
                    <span className="font-medium">
                      {selectedService.price}
                    </span>
                  </p>
                  <p className="text-xs mt-2 text-pink-700">
                    * El valor puede variar según el diseño.
                  </p>
                </div>
              )}

              {/* Botón */}
              <button
                type="submit"
                className="mt-4 bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 rounded-2xl"
              >
                Confirmar reserva
              </button>
            </form>
          ) : (
            /* Reserva exitosa fake */
            <div className="flex flex-col items-center text-center gap-4 py-10">
              <div className="bg-pink-100 text-pink-700 px-6 py-4 rounded-2xl border border-pink-300">
                <p className="text-lg font-bold">
                  ¡Reserva realizada con éxito!
                </p>
                <p className="text-sm mt-2">
                  Tu turno fue registrado correctamente.
                  <br />
                  Puede consultar los datos de la reserva en su perfil.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
