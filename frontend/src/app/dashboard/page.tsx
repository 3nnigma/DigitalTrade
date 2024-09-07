"use client";
import { axiosAuth } from "@/api/interceptors";
import { Button } from "@/components/ui/button";
import { API_URL } from "@/lib/config";
import { useAuthStore } from "@/modules/auth/store";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const { mutate } = useMutation({
    mutationFn: async () => {
      await axiosAuth.post(`${API_URL}/logout/`);
    },
    onSuccess: () => {
      logout();
      router.push("/auth/login");
    },
    onError: (error) => {
      console.error("Logout failed", error);
    },
  });

  const handleLogout = () => {
    mutate();
  };

  const user = useAuthStore((state) => state.user);
  return (
    <div className="w-full h-[750px] flex-col flex justify-center items-center">
      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>
      <h4 className="mt-4">{user?.email}</h4>
      <i className="mt-4">Balance: ${user?.balance}</i>
      <Link className="text-indigo-400" href="/payment">
      Replenish</Link>
    </div>
  );
}
