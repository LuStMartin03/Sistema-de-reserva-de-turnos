import { createContext, useContext, useEffect, useState } from "react";
import * as userService from "../services/user.service";
import * as appointmentService from "../services/appointments.service";

type UserProfile = {
  id: string;
  fullName: string;
  email: string;
  role: "ADMIN" | "CLIENT";
};

type Service = {
  id: string;
  name: string;
  price: number;
};
type TimeSlot = {
  id: string;
  time: string;
};

type Booking = {
  timeSlot: any;
  id: number;
  date: string;
  time: TimeSlot;
  service: Service;
};


type UserContextType = {
  profile: UserProfile | null;
  futureBooking: Booking | null;
  pastBookings: Booking[];
  refreshProfile: () => Promise<void>;
  cancelBooking: (id: number) => Promise<void>;
  deleteAccount: () => Promise<void>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [futureBooking, setFutureBooking] = useState<Booking | null>(null);
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);

  async function loadData() {
    const me = await userService.getMe();
    setProfile(me);

    try {
      const future = await appointmentService.getFutureAppointment();
      setFutureBooking(future ?? null);
    } catch {
      setFutureBooking(null);
    }

    const past = await appointmentService.getPastAppointments();
    setPastBookings(past);
  }

  async function refreshProfile() {
    await loadData();
  }

  async function cancelBooking(id: number) {
    await appointmentService.cancelAppointment(id);
    setFutureBooking(null);
  }

  async function deleteAccount() {
    if (!profile) return;
    await userService.deleteUser(profile.id);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        profile,
        futureBooking,
        pastBookings,
        refreshProfile,
        cancelBooking,
        deleteAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
