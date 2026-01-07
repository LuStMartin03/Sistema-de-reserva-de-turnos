import { useState } from "react";
import { Mail, Lock, UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/auth/register", {
        fullName,
        email: registerEmail,
        password: registerPassword,
      });

      console.log("Register OK", res.data);

      // 👉 si todo salió bien, redirige a home
      navigate("/home");
    } catch (err: any) {
      console.error("Error register", err);

      // 👉 manejo de errores típico con axios
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Error al crear la cuenta. Intentalo nuevamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-6">
      <div className="relative">
        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nombre Completo"
          className="w-full pl-10 py-2 rounded-xl border border-pink-200 px-3"
          required
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
        <input
          type="email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          placeholder="Email"
          className="w-full pl-10 py-2 rounded-xl border border-pink-200 px-3"
          required
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
        <input
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full pl-10 py-2 rounded-xl border border-pink-200 px-3"
          required
        />
      </div>

      {/* 👉 mensaje de error */}
      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-xl text-white transition ${
          loading
            ? "bg-pink-400 cursor-not-allowed"
            : "bg-pink-600 hover:bg-pink-700"
        }`}
      >
        {loading ? "Creando cuenta..." : "Crear Cuenta"}
      </button>
    </form>
  );
}
