import Image from "next/image";

const providersData = [
  {
    title: "Visa",
    pblock: {
      text: "Most popular",
      inf: true,
      sp: 1,
    },
    iblock: {
      name: "Visa Inc.",
      year: "1958",
    },
  },
  {
    title: "MasterCard",
    pblock: {
      text: "Accessibility",
      inf: true,
      sp: 1,
    },
    iblock: {
      name: "Mastercard Inc.",
      year: "1966",
    },
  },
  {
    title: "American Express",
    pblock: {
      text: "Universal",
      inf: true,
      sp: 2,
    },
    iblock: {
      name: "AMEX Company",
      year: "1850",
    },
  },
  {
    title: "PayPal",
    pblock: {
      text: "Pay as you go",
      inf: true,
      sp: 0,
    },
    iblock: {
      name: "PayPal Holdings",
      year: "1998",
    },
  },
];

export default function CardProviders() {
  return (
    <div className="mt-8 font-sans">
      <div className="flex justify-between px-2 items-center">
        Card Providers
        <span>Count: 4</span>
      </div>
      {providersData.map((p) => (
        <div
          key={p.title}
          className="w-full bg-[rgba(31,31,31,0.13)] rounded-lg border-[rgb(53,55,54)] border flex justify-between items-center h-[74px] my-5 px-3.5"
        >
          <div className="flex items-center">
            <Image
              src={"/" + p.title.toLowerCase().replace(" ", "") + ".svg"}
              className={`mr-3 w-11 h-11 rounded-xl p-1 bg-gradient-to-bl from-zinc-700 to bg-zinc-800`}
              width={32}
              height={32}
              alt="pr-image"
            />
            <div>
              {p.title}
              <div className="flex items-center">
                {p.pblock.inf && <PBlocks type="info" text={p.pblock.text} />}
                {p.pblock.sp != 0 && (
                  <PBlocks type={"access"} sp={p.pblock.sp} />
                )}
              </div>
            </div>
          </div>
          <div className="text-right text-xs">
            <span className="text-neutral-300">{p.iblock.name}</span>
            <p className="text-neutral-500 mt-1">{p.iblock.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PBlocks({
  type,
  text,
  sp,
}: {
  type: "info" | "access";
  text?: string;
  sp?: number;
}) {
  return (
    <div
      className={`h-5 flex justify-between items-center p-1 px-2 border-[rgba(255,255,255,0.25)] mr-3 rounded-xl font-sans uppercase text-xs mt-1
        ${type == "info" ? "text-neutral-700 dark:text-neutral-400 bg-gray-400 dark:bg-zinc-800 border" : "text-chart3 bg-[hsla(221.2,83.2%,53.3%,0.19)]"}`}
    >
      <span
        className={`w-1 mr-2 h-1 rounded-full
      ${type == "info" ? "bg-neutral-500" : "bg-chart3"}`}
      />
      {type == "info"
        ? text
        : sp == 1
          ? "support"
          : sp == 2
            ? "partial"
            : ""}
    </div>
  );
}
