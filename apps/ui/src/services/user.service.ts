import api from "../api/axios";

export async function getMe() {
  const res = await api.get("/users/me");
  return res.data;
}

export async function updateMe(data: {
  fullName?: string;
  email?: string;
}) {
  const res = await api.put("/users/me", data);
  return res.data;
}

export async function deleteUser(userId: string) {
  await api.delete(`/users/${userId}`);
}
