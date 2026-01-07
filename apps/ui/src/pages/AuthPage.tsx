import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  LogIn,
  UserPlus,
} from "lucide-react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <main className="min-h-screen bg-[#FCF1F3]">
      <section className="pt-10 pb-5 px-4 flex items-start justify-center">
        <div className="relative w-full max-w-md bg-[#FFF9F6] border border-pink-200 rounded-3xl shadow-xl p-8">

          {/* Volver */}
          <Link to="/home" className="absolute top-6 left-6 text-pink-500">
            <ArrowLeft className="w-7 h-7" />
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

          {/* Tabs */}
          <div className="relative bg-[#EFE7E1] rounded-full p-1 mb-8">
            <div
              className={`absolute top-1 left-1 h-[calc(100%-8px)] w-1/2
              bg-[#FFF9F6] rounded-full transition-all
              ${activeTab === "register" ? "translate-x-[95%]" : ""}`}
            />

            <div className="relative flex">
              <button onClick={() => setActiveTab("login")} className="flex-1 py-2">
                <LogIn className="inline w-4 h-4 mr-2" />
                Iniciar Sesión
              </button>
              <button onClick={() => setActiveTab("register")} className="flex-1 py-2">
                <UserPlus className="inline w-4 h-4 mr-2" />
                Registrarse
              </button>
            </div>
          </div>

          {/* LOGIN */}
          {activeTab === "login" && (
            <LoginForm />
          )}

          {/* REGISTER */}
          {activeTab === "register" && (
            <RegisterForm />
          )}
        </div>
      </section>
    </main>
  );
}
