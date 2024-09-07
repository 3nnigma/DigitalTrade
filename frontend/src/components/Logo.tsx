import Image from "next/image";
import WordRotate from "./ui/wordRotate";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.svg"
        alt="DigitalTrade Logo"
        width={36}
        height={28}
        priority
      />

      <span className="flex ml-1 w-44 items-center scroll-m-20 text-xl font-bold tracking-tight">
<span className="bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent">
          Digital
        </span>
        <WordRotate
          className="text-black dark:text-white"
          words={["Trade", "Bank", "Finances"]}
        />
      </span>
    </Link>
  );
}
