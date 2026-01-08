import api from "../api/axios";

export async function getMyAppointments() {
  const res = await api.get("/appointments/me");
  return res.data;
}
export async function getFutureAppointment() {
  const res = await api.get("/appointments/me?future=true");

  // 👉 si no hay turnos
  if (!res.data || res.data.length === 0) return null;

  // 👉 devolvemos SOLO el primero
  return res.data[0];
}

export async function getPastAppointments() {
  const res = await api.get("/appointments/me?past=true");
  return res.data;
}

export async function cancelAppointment(id: number) {
  await api.patch(`/appointments/${id}/cancel`);
}
