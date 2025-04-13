"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, memo } from "react";
import { useCryptoStore } from "../store";

function TradingChart() {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const symbol = useCryptoStore(state => state.symbol)
  const symbolQuery = "BINANCE:" + symbol + "USDT"
  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.textContent = JSON.stringify({
      autosize: false,
      symbol: symbolQuery,
      interval: "D",
      timezone: "Etc/UTC",
      hide_side_toolbar: false,
      theme: theme === "dark" ? "dark" : "light",
      style: "3",
      locale: "en",
      allow_symbol_change: false,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });
    container.current.appendChild(script);

  }, [theme, symbol]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "100%", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingChart);
