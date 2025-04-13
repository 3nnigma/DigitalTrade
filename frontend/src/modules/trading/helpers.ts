import axios from "axios";
import { coins } from "./cryptoData";

interface ICryptoResponse {
  symbol: string;
  price: number;
}


export const fetchSymbol = async (symbol: string): Promise<number> => {
  const { data }: { data: ICryptoResponse } = await axios.get(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`,
  );
  const price = parseFloat((data.price).toString());

  if (isNaN(price)) {
    throw new Error("Invalid price returned from API");
  }

  return price;
};


export const fetchCryptoData = async () => {
  const requests = coins.map((coin) =>
    axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.symbol === "USDT" ? "USDC" : coin.symbol}USDT`)
  );
  const responses = await Promise.all(requests);
  return responses.map((res) => res.data);
};
