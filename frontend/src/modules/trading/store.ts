import { create } from "zustand";

interface ICryptoStore {
  symbol: string,
  setSymbol: (symbol: string) => void
}

export const useCryptoStore = create<ICryptoStore>((set) => ({
  symbol: "BTC",
  setSymbol: symbol => { symbol != "USDT" ? set({ symbol }) : "" },
}));
