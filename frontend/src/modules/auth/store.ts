import { create } from "zustand";

export interface IUser {
  first_name: string;
  last_name: string | null;
  email: string;
  balance: number;
}

interface IAuthState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
