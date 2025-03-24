import { axiosAuth } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { useAuthStore } from "./store";
import { useRouter } from "next/navigation";

const fetchLogout = async () => {
  await axiosAuth.post(`${API_URL}/logout/`);
};

export const LogoutComponent = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const { mutate } = useMutation({
    mutationFn: fetchLogout,
    onSuccess: () => {
      logout();
      router.push("/auth/login");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <div className="flex w-full h-full" onClick={() => mutate()}>
      <LogOut size={20} className="mr-2" />
      Log out
    </div>
  );
};
