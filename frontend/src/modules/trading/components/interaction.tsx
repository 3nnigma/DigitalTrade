"use client";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { coins } from "../cryptoData";
import { useEffect, useState } from "react";
import { Input } from "@/modules/auth/components/ui/input";
import { Button } from "@/components/ui/buttons/button";
import { cn } from "@/lib/utils";
import { useCryptoStore } from "../store";
import { fetchCryptoData, fetchSymbol } from "../helpers";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/components/ui/futures/spinner";
import { useTheme } from "next-themes";

export default function Interaction() {
  const { theme } = useTheme();

  const [tradeState, setTradeState] = useState<"buy" | "sell">("buy");
  const [rate, setRate] = useState("0");
  const [tokenPrice, setTokenPrice] = useState("");
  const [usdPrice, setUsdPrice] = useState("");

  const isBuy = tradeState === "buy";

  const { symbol, changeSymbol } = useCryptoStore((state) => ({
    symbol: state.symbol,
    changeSymbol: state.setSymbol,
  }));

  const { data, isLoading, isError } = useQuery({
    queryKey: ["crypto-data"],
    queryFn: fetchCryptoData,
    refetchInterval: 15000,
  });

  const handleTokenChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rate: number,
  ) => {
    const value = e.target.value;
    setTokenPrice(value);

    if (value === "") {
      setUsdPrice("");
    } else {
      const calculatedUsdt = (parseFloat(value) * rate).toFixed(2);
      setUsdPrice(calculatedUsdt);
    }
  };

  const handleUsdChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rate: number,
  ) => {
    const value = e.target.value;
    setUsdPrice(value);

    if (value === "") {
      setTokenPrice("");
    } else {
      const calculatedBtc = (parseFloat(value) / rate).toFixed(6);
      setTokenPrice(calculatedBtc);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const currentPrice = await fetchSymbol(symbol);
        setRate(currentPrice.toFixed(2));
      } catch (error) {
        console.error("Error fetching crypto:", error);
        setRate("0");
      }
    })();
  }, [symbol]);

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        {" "}
        <Spinner />{" "}
      </div>
    );
  if (isError || !data) return <div>Failed to load data</div>;

  return (
    <div className="w-full h-[80%]">
      <div className="border p-3 border-gray-500/40 bg-zinc-100 dark:bg-zinc-800/35 max-h-[45%] w-full my-[4%] rounded-lg">
        <div className="flex font-normal text-lg justify-center items-center">
          <span
            className={cn(
              "cursor-pointer border-b transition-all border-blue-500 text-blue-500  py-1 px-9 mx-3 rounded",
              !isBuy ? "border-gray-500 text-foreground" : "",
            )}
            onClick={() => setTradeState("buy")}
          >
            Buy
          </span>
          <span
            className={cn(
              "cursor-pointer border-b border-gray-500 text-foreground transition-all py-1 px-9 mx-3 rounded",
              !isBuy ? "border-blue-500 text-blue-500" : "",
            )}
            onClick={() => setTradeState("sell")}
          >
            Sell
          </span>
        </div>
        <div className="pt-9 box-border  flex flex-col text-xs opacity-90">
          <div className="relative">
            <span className="absolute h-6 w-[4.9rem] flex justify-between items-center right-4 top-2.5 ">
              {coins.find((s) => s.symbol === symbol)?.icon()}
              <p className="text-sm w-full text-center">{symbol}</p>
            </span>
            <Input
              className={theme == "light" ? "bg-gray-200 text-neutral-800" : ""}
              value={tokenPrice}
              onChange={(e) => handleTokenChange(e, Number(rate))}
              placeholder="0.00"
            />
          </div>
          <span className="ml-2 mt-4 mb-3.5 w-full flex items-center text-neutral-500 dark:text-neutral-200">
            <ArrowUpDown
              size={16}
              className="mr-2 rounded text-white bg-gray-500 flex justify-center items-center p-1 w-[18px] h-[18px]"
            />{" "}
            1 {symbol} ≈ USD ${rate}
          </span>
          <div className="relative">
            <span className="absolute h-6 w-[4.9rem] flex justify-between items-center right-4 top-2.5 ">
              {coins[coins.length - 1].icon()}
              <p className=" text-sm w-full text-center">USDT</p>
            </span>
            <Input
              value={usdPrice}
              className={theme == "light" ? "bg-gray-200 text-neutral-800" : ""}
              onChange={(e) => handleUsdChange(e, Number(rate))}
              placeholder="10 - 10,000"
            />
          </div>
          <Button
            className={cn(
              "bg-blue-600 mt-7 mb-3 transition-none font-bold text-white hover:bg-blue-700",
              !isBuy ? "bg-red-400 hover:bg-red-500" : "",
            )}
          >
            {isBuy ? "Buy" : "Sell"} BTC
          </Button>
        </div>
      </div>

      <div className="border border-gray-500/40   p-3 max-h-[480px] overflow-y-scroll  w-full rounded-lg">
        <div className="flex items-center justify-between px-1.5">
          <h3>Cryptocurrencies</h3>
          <MoreHorizontal className="cursor-pointer" size={20} />
        </div>
        <div className="text-white max-w-md  w-full">
          {coins.map((coin, index) => {
            const Icon = coin.icon;
            const isPositive = data[index].priceChangePercent >= 0;

            return (
              <div
                key={coin.symbol}
                onClick={() => {
                  changeSymbol(coin.symbol);
                  setTokenPrice("");
                  setUsdPrice("");
                }}
                className="flex rounded-xl cursor-pointer dark:bg-[#1E1E24] bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all p-3 items-center my-3 justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-white/70 dark:bg-white/10 p-2 text-foreground/85">
                    {<Icon />}
                  </div>
                  <div>
                    <div className="text-base font-medium text-foreground">
                      {coin.name}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {coin.symbol}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-sm text-foreground
                    font-semibold"
                  >
                    ${Number(data[index].bidPrice).toFixed(2)}
                  </div>
                  <div
                    className={isPositive ? "text-green-500" : "text-red-500"}
                  >
                    <span className="mr-[1px] text-xs">
                      {isPositive ? "▲" : "▼"}
                    </span>{" "}
                    {Math.abs(data[index].priceChangePercent).toFixed(2)}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
