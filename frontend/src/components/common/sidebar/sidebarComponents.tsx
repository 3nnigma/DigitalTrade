import Image from "next/image";
import {
  Bell,
  LogOut,
  ScanQrCode,
  ShieldCheck,
  UserCircle,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/modules/auth/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { LogoutComponent } from "@/modules/auth/logout";

export function SidebarHeader() {


  return (
    <div className="h-[5.5%] border-[#e3e3e75c] dark:border-[#ffffff0f] border-b  w-full">
      <Link
        href="/app/dashboard"
        className="p-3 m-1 flex hover:bg-hoverbg rounded cursor-pointer "
      >
        <Image
          src="/logo.svg"
          alt="DigitalTrade Logo"
          width={32}
          height={32}
          priority
          className="rounded mt-1 mr-3 shadow-inner"
        />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-sm">DigitalTrade</span>
          <p className="opacity-75 text-xs">Finance</p>
        </div>
        <ShieldCheck
          width={20}
          height={20}
          className="opacity-75 mt-2 ml-[90px]"
        />
      </Link>
    </div>
  );
}

export function SidebarFooter() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className=" h-[5%]  font-normal w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex transition mb-2 relative justify-start items-center  hover:bg-hoverbg py-[5px] pl-3 pr-2 mx-3 rounded-md cursor-pointer">
            <div className="flex justify-center items-center">
              <Image
                src="/man.svg"
                alt="user-icon"
                width={32}
                height={32}
                className="w-9 h-9 rounded bg-gradient-to-br from-[#6492ff9e] to-transparent "
              />
              <div className="ml-2.5">
                <span>{user?.first_name + " " + user?.last_name}</span>
                <p className="opacity-80 text-sm">
                  {user?.email
                    ? user.email.length < 15
                      ? user.email
                      : user.email.slice(0, 15) + "..."
                    : ""}
                </p>
              </div>
            </div>
            <ScanQrCode size={22} className="absolute top-[33%] right-2" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="flex mb-1">
            <UserCircle size={20} className="mr-2" />
            {user?.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer mb-1.5">
            <Bell size={20} className="mr-2" />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Wallet size={20} className="mr-2 mb-1" />
            Balance: ${user?.balance}
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
          <LogoutComponent />
          </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
