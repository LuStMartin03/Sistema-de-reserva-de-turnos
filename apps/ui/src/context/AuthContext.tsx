import { createContext, useContext, useState } from "react";
import { login as loginService, register as registerService } from "../services/auth.service";

type User = {
  id: string;
  fullName: string;
  email: string;
  role: "ADMIN" | "CLIENT";
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function login(email: string, password: string) {
    const { user, token } = await loginService({ email, password });
    localStorage.setItem("token", token);
    setUser(user);
  }

  async function register(fullName: string, email: string, password: string) {
    const { user, token } = await registerService({ fullName, email, password });
    localStorage.setItem("token", token);
    setUser(user);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
