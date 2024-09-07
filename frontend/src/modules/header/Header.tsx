"use client";

import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ui/themeToggle";
import { Navbar } from "./components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "../auth/store";
import { useUser } from "../auth/user";
import { CircleUser } from "lucide-react";

export default function Header() {
  const { isLoading } = useUser();
  const userData = useAuthStore((state) => state.user);
  return (
    <header className="sticky top-0 z-50 w-full  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between px-10 items-center h-16">
      <div className="flex justify-between w-[40%]">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center justify-between">
        {isLoading ? (
          <div></div>
        ) : !userData ? (
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
        ) : (
          <div className="flex justify-center items-center">
            <CircleUser width={22} height={22} className="mr-1.5" />
            <Link href="/dashboard">{userData?.first_name}</Link>
          </div>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
