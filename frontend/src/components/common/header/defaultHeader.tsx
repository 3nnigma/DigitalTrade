import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import ThemeSwitcherButton from "@/components/ui/themeToggle";

export default function DefaultHeader() {
  const navItemStyles =
    "group inline-flex items-center justify-center rounded-md px-4  py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer";

  return (
    <header className="sticky top-0 z-[99999] w-full  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10 flex justify-between px-14 items-center h-16">
      <Logo />
      <div className="hidden lg:flex items-center justify-center text-gray-700 dark:text-gray-300">
        <div className="bg-gradient-to-t from-gray-100 to-gray-200 dark:from-[#303030] dark:to-[#222] h-10 rounded-full px-2 flex flex-1">
          <div className={navItemStyles}>Home</div>
          <div className={navItemStyles}>Markets</div>
          <div className={navItemStyles}>Futures</div>
          <div className={navItemStyles}>Banking</div>
          <div className={navItemStyles}>FAQ</div>

          <div className="flex cursor-default rounded-full bg-[#c2c2c2b2] dark:bg-[rgba(63,63,63,0.7)] opacity-80 px-3 ml-8 text-sm my-1.5 justify-center items-center">
            Security
            <ShieldCheck className="ml-1.5" size={16} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link href="/auth/login">
          <Button variant="outline" size="sm" className="mr-3">
            Sign in
          </Button>
        </Link>
        <Link
          href="/auth/register"
          className="font-medium text-sm ml-2 hover:opacity-80"
        >
          Sign up
        </Link>
        <span className="w-[1px] h-7 bg-gray-500 mx-4" />
        <ThemeSwitcherButton />
      </div>
    </header>
  );
}
