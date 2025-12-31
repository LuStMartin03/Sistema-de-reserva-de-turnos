import { Link } from "react-router-dom";

import { useState } from "react";
import {
  ArrowLeft,
  LogIn,
  Mail,
  User,
  UserPlus,
  Lock,
} from "lucide-react";


export default function Register() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submit");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <main className="min-h-screen bg-[#FCF1F3]">
      <section className="pt-10 pb-5 px-4 flex items-start justify-center">
        
        <div className="relative w-full max-w-md bg-[#FFF9F6] border border-pink-200 rounded-3xl shadow-xl p-8">

        {/* Volver a Home */}
        <Link
        to="/home"
        className="absolute top-6 left-6 flex items-center gap-2
                    text-pink-500 hover:text-pink-700
                    transition"
        >
        <ArrowLeft className="w-7 h-7"/>
        </Link>  
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-pink-500 to-red-900 p-1">
              <div className="w-full h-full rounded-full bg-[#FFF9F6] flex items-center justify-center">
                <div className="relative h-12 w-full flex items-center justify-center">
                  <span className="absolute text-3xl font-black tracking-tighter text-red-800">
                    RNEYRA
                  </span>
                  <span className="absolute text-2xl font-yellowtail text-pink-300">
                    nails
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Título */}
          {/* <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#2B1B14] mb-2">
              Bienvenida
            </h1>
            
          </div> */}

          {/* Tabs */}
            <div className="relative bg-[#EFE7E1] rounded-full p-1 mb-8">
            
            {/* Indicador deslizante */}
            <div
                className={`absolute top-1 left-1 h-[calc(100%-8px)] w-1/2
                            bg-[#FFF9F6] rounded-full shadow-sm
                            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]

                            ${activeTab === "register" ? "translate-x-[95%]" : "translate-x-0"}`}
            />

            <div className="relative flex">
                <button
                onClick={() => setActiveTab("login")}
                className="flex-1 flex items-center justify-center gap-2 py-2 z-10
                            transition-colors"
                >
                <LogIn className="w-4 h-4" />
                Iniciar Sesión
                </button>

                <button
                onClick={() => setActiveTab("register")}
                className="flex-1 flex items-center justify-center gap-2 py-2 z-10
                            transition-colors"
                >
                <UserPlus className="w-4 h-4" />
                Registrarse
                </button>
            </div>
            </div>

            {/* FORMULARIOS */}
            <div className="relative min-h-[250px]">

            {/* LOGIN */}
            <div
            className={`absolute inset-0 transition-all duration-300
                ${activeTab === "login"
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                }`}
            >
                <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                    <input
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="w-full pl-10 py-2 rounded-xl border border-pink-200
                                focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                    <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    className="w-full pl-10 py-2 rounded-xl border border-pink-200
                                focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3
                            rounded-xl bg-pink-600 hover:bg-pink-700
                            text-white font-semibold transition"
                >
                    <LogIn className="w-5 h-5" />
                    Iniciar Sesión
                </button>

                <p className="text-center text-sm text-pink-600 hover:underline cursor-pointer">
                    ¿Olvidaste tu contraseña?
                </p>
                </form>
            </div>

            {/* REGISTER */}
            <div
            className={`absolute inset-0 transition-all duration-300
                ${activeTab === "register"
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                }`}
            >
                <form onSubmit={handleRegister} className="space-y-6 mt-2">
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                    <input
                    type="text"
                    placeholder="Nombre Completo"
                    required
                    className="w-full pl-10 py-2 rounded-xl border border-pink-200
                                focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                    <input
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="w-full pl-10 py-2 rounded-xl border border-pink-200
                                focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-400" />
                    <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    className="w-full pl-10 py-2 rounded-xl border border-pink-200
                                focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3
                            rounded-xl bg-pink-600 hover:bg-pink-700
                            text-white font-semibold transition"
                >
                    <UserPlus className="w-5 h-5" />
                    Crear Cuenta
                </button>
                </form>
            </div>
            </div>


        </div>
      </section>

    </main>
  );
}
