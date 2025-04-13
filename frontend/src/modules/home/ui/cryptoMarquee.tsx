import { Icons } from "@/lib/crypto";

const cryptos = [
  "Litecoin",
  "XRP",
  "Ethereum",
  "Bitcoin",
  "BNB",
  "Solana",
  "Tether",
];

export default function CryptoMarquee() {
  return (
    <div className="flex overflow-hidden w-full text-xl relative select-none font-bold opacity-80 h-[116px] items-center justify-center">
      <div className="absolute top-[35%] left-0 bottom-0 right-0 pointer-events-none mask-gradient z-50"></div>
      {cryptos.map((crypto) => {
        const key = crypto.toLowerCase() as keyof typeof Icons;
        const Icon = Icons[key];

        return (
          <div key={crypto} className="flex items-center mx-10">
            {Icon && <Icon />}
            <span className="ml-3">{crypto}</span>
          </div>
        );
      })}
    </div>
  );
}
