"use client"
import { useUser } from "@/modules/auth/user";
import { useAuthStore } from "@/modules/auth/store";
import DefaultHeader from "./defaultHeader";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isLoading } = useUser();
  const userData = useAuthStore((state) => state.user);
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <>
      {isLoading && !isAuthPage ? (
        <div className="h-16 w-full"></div>
      ) : !userData && !isAuthPage ? (
        <DefaultHeader />
      ) : (
        <></>
      )}{" "}
    </>
  );
}
