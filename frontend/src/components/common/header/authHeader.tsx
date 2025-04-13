"use client";

import { navItems } from "../sidebar/sidebarItems";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftToLine, Bell, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { axiosAuth } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import { useAuthStore } from "@/modules/auth/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter as useNavRouter } from "next/navigation";
import ThemeSwitcherButton from "@/components/ui/futures/themeToggle";

export default function AuthHeader() {
  const pathName = usePathname();
  const router = useRouter();
  const navRouter = useNavRouter();

  const logout = useAuthStore((state) => state.logout);
  const { mutate } = useMutation({
    mutationFn: async () => {
      await axiosAuth.post(`${API_URL}/logout/`);
    },
    onSuccess: () => {
      logout();
      navRouter.push("/auth/login");
    },
    onError: (error) => {
      console.error("Logout failed", error);
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return (
    <div className="w-full font-sans h-20 flex justify-between px-4 items-center ">
      <div className="flex justify-center items-center">
        <ArrowLeftToLine
          size={20}
          className="cursor-pointer mr-3 opacity-80 hover:opacity-100 transition-all"
          onClick={() => router.back()}
        />
        {navItems.map((item, index) =>
          pathName.includes(item.link) ? (
            <div
              key={index}
              className="border-[rgba(209, 213, 219, 0.7)] h-6 dark:border-[#ffffff24] border-l pl-3 text-lg flex justify-center items-center"
            >
              {<item.icon size={18} />}
              <span className="ml-2">{item.title}</span>
            </div>
          ) : (
            ""
          ),
        )}
      </div>
      <div className="flex justify-center font-normal items-center">
        <div className="flex justify-center items-center border-[rgba(209, 213, 219, 0.7)]  dark:border-[#ffffff3b] ">
          <Link href="#" className="flex font-sans justify-center items-center">
            <Bell size={20} className="mx-2" />
            Notifications
          </Link>
          <Link
            href="settings"
            className="flex mx-4 justify-center font-sans items-center"
          >
            <Settings size={20} className="mx-2" />
            Settings
          </Link>
        </div>
        <div className="ml-4 flex justify-center items-center">
          {/* <Button variant="default" size="sm" onClick={handleLogout}>
            {" "}
            Log out
            <LogOut size={16} className="ml-2" />
          </Button> */}
          <ThemeSwitcherButton />
        </div>
      </div>
    </div>
  );
}
