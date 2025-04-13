
"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, memo } from "react";

const TradingViewTimeline: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    //   const script = document.createElement("script");
    //   script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    //   script.type = "text/javascript";
    //   script.async = true;
    //   script.textContent = JSON.stringify({
    //     feedMode: "all_symbols",
    //     isTransparent: false,
    //     displayMode: "regular",
    //     width: "80%",
    //     height: 550,
    //     backgroundColor: theme === "dark" ? "rgba(36, 36, 39, 1)" : "#f9f9f9",
    //     colorTheme: theme === "dark" ? "dark" : "light",
    //     locale: "en",
    //   });
    //   container.current.appendChild(script);

    const script2 = document.createElement("script");
    script2.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script2.type = "text/javascript";
    script2.async = true;
    script2.textContent = JSON.stringify({
      width: "100%",
      height: 800,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: theme === "dark" ? "dark" : "light",
      locale: "en",
      isTransparent: false,
    });
    container.current.appendChild(script2);
  }, [theme]);

  return (
    <div className="tradingview-widget-container w-[90%] mx-auto  rounded-lg overflow-hidden mb-24 h-[800px]">
      <div className="tradingview-widget-container__widget" ref={container} />
    </div>
  );
};

export default memo(TradingViewTimeline);
