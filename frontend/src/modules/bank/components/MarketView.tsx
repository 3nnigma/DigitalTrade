"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useRef, memo } from "react";

function MarketView() {
  const container = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  useEffect(() => {
    if (!container.current) return;
    container.current.innerHTML = "";
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.textContent = JSON.stringify({
      symbols: [
        ["FX:EURUSD|12M"],
        ["TVC:GOLD|12M"],
        ["BITSTAMP:BTCUSD|12M"],
        ["COINBASE:ETHUSD|12M"],
        ["NASDAQ:NVDA|12M"],
        ["NASDAQ:AAPL|12M"],
      ],
      chartOnly: false,
      width: "100%",
      height: "100%",
      locale: "en",
      autosize: true,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",

      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      headerFontSize: "small",
      backgroundColor: theme === "dark" ? "rgba(36, 36, 39, 1)" : "#f9f9f9",
      lineWidth: 2,
      lineType: 0,
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      colorTheme: theme === "dark" ? "dark" : "light",

      lineColor: "rgba(49, 121, 245, 1)",
      topColor: "rgba(49, 121, 245, 0.09)",
      bottomColor: "rgba(49, 121, 245, 0)",
    });
    container.current.appendChild(script);
  }, [theme]);

  return (
    <div
      className="tradingview-widget-container"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ width: "100%", height: "100%" }}
        ref={container}
      />
    </div>
  );
}

export default memo(MarketView);

// import React, { useEffect, useRef } from "react";
// import { useTheme } from "next-themes";

// const MarketView = () => {
//   const containerRef = useRef(null);
//   const { theme } = useTheme();

//   useEffect(() => {
//     if (!containerRef.current) return;

//     containerRef.current.innerHTML = "";

//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
//     script.async = true;
//     script.type = "text/javascript";

//     script.textContent = JSON.stringify({
//       colorTheme: theme === "dark" ? "dark" : "light",
//       dateRange: "12M",
//       showChart: true,
//       locale: "en",
//       width: "100%",
//       height: "100%",
//       largeChartUrl: "",
//       isTransparent: false,
//       showSymbolLogo: true,
//       showFloatingTooltip: false,
//       plotLineColorGrowing: "rgba(41, 98, 255, 1)",
//       plotLineColorFalling: "rgba(41, 98, 255, 1)",
//       gridLineColor: "rgba(42, 46, 57, 0)",
//       scaleFontColor: "rgba(219, 219, 219, 1)",
//       belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
//       belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
//       belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
//       belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
//       symbolActiveColor: "rgba(41, 98, 255, 0.12)",
//       tabs: [
//                      {
//                        "title": "Indices",
//                        "symbols": [
//                          {
//                            "s": "FOREXCOM:SPXUSD",
//                            "d": "S&P 500 Index"
//                          },
//                          {
//                            "s": "FOREXCOM:NSXUSD",
//                            "d": "US 100 Cash CFD"
//                          },
//                          {
//                            "s": "FOREXCOM:DJI",
//                            "d": "Dow Jones Industrial Average Index"
//                          },
//                          {
//                            "s": "INDEX:NKY",
//                            "d": "Japan 225"
//                          },
//                          {
//                            "s": "INDEX:DEU40",
//                            "d": "DAX Index"
//                          },
//                          {
//                            "s": "FOREXCOM:UKXGBP",
//                            "d": "FTSE 100 Index"
//                          }
//                        ],
//                        "originalTitle": "Indices"
//                      },
//                      {
//                        "title": "Futures",
//                        "symbols": [
//                          {
//                            "s": "CME_MINI:ES1!",
//                            "d": "S&P 500"
//                          },
//                          {
//                            "s": "CME:6E1!",
//                            "d": "Euro"
//                          },
//                          {
//                            "s": "COMEX:GC1!",
//                            "d": "Gold"
//                          },
//                          {
//                            "s": "NYMEX:CL1!",
//                            "d": "WTI Crude Oil"
//                          },
//                          {
//                            "s": "NYMEX:NG1!",
//                            "d": "Gas"
//                          },
//                          {
//                            "s": "CBOT:ZC1!",
//                            "d": "Corn"
//                          }
//                        ],
//                        "originalTitle": "Futures"
//                      },
//                      {
//                        "title": "Bonds",
//                        "symbols": [
//                          {
//                            "s": "CBOT:ZB1!",
//                            "d": "T-Bond"
//                          },
//                          {
//                            "s": "CBOT:UB1!",
//                            "d": "Ultra T-Bond"
//                          },
//                          {
//                            "s": "EUREX:FGBL1!",
//                            "d": "Euro Bund"
//                          },
//                          {
//                            "s": "EUREX:FBTP1!",
//                            "d": "Euro BTP"
//                          },
//                          {
//                            "s": "EUREX:FGBM1!",
//                            "d": "Euro BOBL"
//                          }
//                        ],
//                        "originalTitle": "Bonds"
//                      },
//                      {
//                        "title": "Forex",
//                        "symbols": [
//                          {
//                            "s": "FX:EURUSD",
//                            "d": "EUR to USD"
//                          },
//                          {
//                            "s": "FX:GBPUSD",
//                            "d": "GBP to USD"
//                          },
//                          {
//                            "s": "FX:USDJPY",
//                            "d": "USD to JPY"
//                          },
//                          {
//                            "s": "FX:USDCHF",
//                            "d": "USD to CHF"
//                          },
//                          {
//                            "s": "FX:AUDUSD",
//                            "d": "AUD to USD"
//                          },
//                          {
//                            "s": "FX:USDCAD",
//                            "d": "USD to CAD"
//                          }
//                        ],
//                        "originalTitle": "Forex"
//                      }
//                    ]
//     });

//     containerRef.current.appendChild(script);
//   }, [theme]);

//   return (
//     <div
//       className="tradingview-widget-container"
//       style={{ width: "100%", height: "550px" }}
//     >
//       <div
//         className="tradingview-widget-container__widget border-none rounded-non"
//         ref={containerRef}
//         style={{ width: "100%", height: "100%", borderRadius: "0px" }}
//       />
//     </div>
//   );
// };

// export default MarketView;
