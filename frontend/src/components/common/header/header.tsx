"use client";

import { useUser } from "@/modules/auth/user";
import { useAuthStore } from "@/modules/auth/store";
import DefaultHeader from "./defaultHeader";
import AuthHeader from "./authHeader";

export default function Header() {
  const { isLoading } = useUser();
  const userData = useAuthStore((state) => state.user);

  return <>{isLoading ? <></> : !userData ? <DefaultHeader /> : <></>} </>;
}
