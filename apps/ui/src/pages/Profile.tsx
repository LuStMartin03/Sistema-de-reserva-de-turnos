import { Trash2, CalendarX, CalendarCheck, CalendarHeart, Clock, Brush, Mail, Pencil, User} from "lucide-react";
import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile() {
  const { profile, futureBooking, pastBookings, cancelBooking, deleteAccount} = useUser();

  async function handleDelete() {
    if (confirm("¿Seguro que querés eliminar tu cuenta?")) {
      await deleteAccount();
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }
  function splitDateTime(date: string) {
  if (!date) return "";
  return date.split("T")[0];
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

              {/* Nombre */}
              <div>
                <p className="text-xs text-red-800/60">Nombre completo</p>
                <div className="mt-1 flex items-center justify-between px-4 py-2 rounded-xl bg-pink-100/50 text-red-800">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-pink-500" />
                    <span>{profile?.fullName}</span>
                  </div>
                  <Pencil className="w-4 h-4 text-pink-500 cursor-pointer hover:text-pink-700 transition" />
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs text-red-800/60">Email</p>
                <div className="mt-1 flex items-center justify-between px-4 py-2 rounded-xl bg-pink-100/50 text-red-800">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-pink-500" />
                    <span>{profile?.email}</span>
                  </div>
                  <Pencil className="w-4 h-4 text-pink-500 cursor-pointer hover:text-pink-700 transition" />
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
                <div className="text-sm text-pink-800 font-semibold">
                  <div className="flex flex-row items-center justify-start mb-2">
                    <CalendarHeart className="w-5 h-5 mr-2" strokeWidth={1}/>
                    <p> {splitDateTime(futureBooking.date)} </p>
                  </div>
                  <div className="flex flex-row items-center justify-start mb-2">
                    <Clock className="w-5 h-5 mr-2" strokeWidth={1}/>
                    <p> {futureBooking.timeSlot?.time} </p>
                  </div>
                  <div className="flex flex-row items-center justify-start mb-2">
                    <Brush className="w-5 h-5 mr-2" strokeWidth={1}/>
                    <p> {futureBooking.service?.name ?? "No disponible"} </p>
                  </div>
                  <div className="flex flex-row items-center justify-start mb-2">
                    <p className="ml-1 mr-3 font-thin text-lg"> $ </p>
                    <p> {futureBooking.service?.price ?? "No disponible"} </p>
                  </div>
                </div>

                <button
                  onClick={() => cancelBooking(futureBooking?.id)}
                  className="flex items-center justify-center gap-2 text-sm text-pink-100 bg-red-800 px-4 py-2 rounded-xl hover:bg-red-900 transition"
                >
                  Cancelar turno
                </button>
              </div>
            ) : (
              <p className="ml-5 text-sm text-red-800/60 italic">
                No tenés turnos futuros.
              </p>
            )}
          </section>

          {/* TURNOS ANTERIORES */}
          <section className="bg-white border border-pink-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 flex items-center gap-2">
              <CalendarX className="w-5 h-5" />
              Turnos anteriores
            </h2>

            {pastBookings.length > 0 ? (
              <div className="space-y-3">
                {pastBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-pink-50 border border-pink-200 rounded-2xl p-4 text-sm text-pink-800"
                  >
                    <p>{splitDateTime(booking.date)} — {booking.timeSlot?.time}</p>
                    <p className="font-medium">{booking.service.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="ml-5 text-sm text-red-800/60 italic">
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
