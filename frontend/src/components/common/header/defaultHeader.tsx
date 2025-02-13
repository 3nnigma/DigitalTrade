import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import { ChevronRight, CircleUser } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function DefaultHeader() {
  const navItemStyles =
    "group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 cursor-pointer";

  return (
    <header className="sticky top-0 z-50 w-full  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/10 flex justify-between px-10 items-center h-16">
      <div className="flex justify-between w-1/3">
        <Logo />
        <div className="group flex flex-1 list-none items-center justify-center space-x-1 text-gray-300">
          <div className={navItemStyles}>
            Market <ChevronRight className="ml-1.5" size={13.5} />
          </div>
          <div className={navItemStyles}>
            Bank <ChevronRight className="ml-1.5" size={13.5} />
          </div>
          <div className={navItemStyles}>
            Spot trading <ChevronRight className="ml-1.5" size={13.5} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <Link href="/auth/login">
            <Button variant="outline" className="mr-3">
              Sign in
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button size="sm" variant="ghost">
              Sign up
            </Button>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
