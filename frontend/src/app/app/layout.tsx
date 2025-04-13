"use client";

import AuthHeader from "@/components/common/header/authHeader";
import Sidebar from "@/components/common/sidebar/sidebar";
import Spinner from "@/components/ui/futures/spinner";
import { useAuthStore } from "@/modules/auth/store";
import { useUser } from "@/modules/auth/user";
import { ReactNode } from "react";

export default function test({ children }: { children: ReactNode }) {
  const { isLoading } = useUser();
  const userData = useAuthStore((state) => state.user);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : userData?.email ? (
        <div className="flex font-bold w-full h-full ">
          <Sidebar />
          <div className="w-full mx-2 ml-5">
            <AuthHeader />
            <div className="w-full h-[calc(100%-80px)]">{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
