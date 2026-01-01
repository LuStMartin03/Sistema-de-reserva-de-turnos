import Header from "../components/Header";
import Footer from "../components/Footer";
import { Trash2, CalendarX, CalendarCheck } from "lucide-react";
import { useState } from "react";

type Booking = {
  id: number;
  date: string;
  time: string;
  service: string;
  price?: string;
};

export default function Profile() {
  // Usuario mock
  const user = {
    name: "Lucía Saint Martin",
    email: "lucia@email.com",
  };

  // Turno futuro mock
  const [futureBooking, setFutureBooking] = useState<Booking | null>({
    id: 1,
    date: "2026-02-10",
    time: "15:30",
    service: "Soft Gel",
    price: "$ 20.000"
  });

  // Turnos anteriores mock
  const pastBookings: Booking[] = [
    {
      id: 2,
      date: "2025-12-05",
      time: "14:00",
      service: "Semi Permanente",
    },
    {
      id: 3,
      date: "2025-10-20",
      time: "16:30",
      service: "Kapping",
    },
  ];

  function cancelBooking() {
    setFutureBooking(null);
  }

  function deleteAccount() {
    alert("Cuenta eliminada (mock)");
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FCF1F3]">
      <Header />

      <main className="flex-1 w-full flex justify-center px-4 mt-24 mb-16">
        <div className="w-full max-w-4xl space-y-10">

          {/* PERFIL */}
          <section className="bg-white border border-pink-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6">
              Mi perfil
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-red-800/60">Nombre completo</p>
                <div className="mt-1 px-4 py-2 rounded-xl bg-pink-100/50 text-red-800">
                  {user.name}
                </div>
              </div>

              <div>
                <p className="text-xs text-red-800/60">Email</p>
                <div className="mt-1 px-4 py-2 rounded-xl bg-pink-100/50 text-red-800">
                  {user.email}
                </div>
              </div>
            </div>
          </section>

          {/* TURNO FUTURO */}
          <section className="bg-white border border-pink-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" />
              Próximo turno
            </h2>

            {futureBooking ? (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-pink-50 border border-pink-200 rounded-2xl p-4">
                <div className="text-sm text-pink-800">
                  <p><strong>Día:</strong> {futureBooking.date}</p>
                  <p><strong>Hora:</strong> {futureBooking.time}</p>
                  <p><strong>Servicio:</strong> {futureBooking.service}</p>
                  <p><strong>Precio Aproximado:</strong> {futureBooking.price}</p>
                </div>

                <button
                  onClick={cancelBooking}
                  className="flex items-center justify-center gap-2 text-sm text-red-600 border border-red-300 px-4 py-2 rounded-xl hover:bg-red-50 transition"
                >
                  <CalendarX className="w-4 h-4" />
                  Cancelar turno
                </button>
              </div>
            ) : (
              <p className="text-sm text-red-800/60">
                No tenés turnos futuros.
              </p>
            )}
          </section>

          {/* TURNOS ANTERIORES */}
          <section className="bg-white border border-pink-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">
              Turnos anteriores
            </h2>

            {pastBookings.length > 0 ? (
              <div className="space-y-3">
                {pastBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-pink-50 border border-pink-200 rounded-2xl p-4 text-sm text-pink-800"
                  >
                    <p>{booking.date} — {booking.time}</p>
                    <p className="font-medium">{booking.service}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-red-800/60">
                Todavía no realizaste ningún turno.
              </p>
            )}
          </section>

          {/* ZONA PELIGRO */}
          <section className="border border-red-300 bg-red-50 rounded-3xl p-6 sm:p-10">
            <h2 className="text-lg font-semibold text-red-600 mb-4">
              Zona peligrosa
            </h2>

            <p className="text-sm text-red-700 mb-4">
              Eliminar tu cuenta borrará todos tus datos y turnos asociados.
              Esta acción no se puede deshacer.
            </p>

            <button
              onClick={deleteAccount}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold transition"
            >
              <Trash2 className="w-5 h-5" />
              Eliminar cuenta
            </button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
