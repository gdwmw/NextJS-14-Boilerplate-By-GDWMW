import { create } from "zustand";

type States = {
  openA?: boolean;
  openB?: boolean;
};

type Actions = {
  setOpenA: (param: boolean) => void;
  setOpenB: (param: boolean) => void;
};

export const useGlobalStates = create<Actions & States>((set) => ({
  openA: false,
  openB: false,
  setOpenA: (openA: boolean) => set({ openA }),
  setOpenB: (openB: boolean) => set({ openB }),
}));
