import { axiosAuth } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import { useRouter } from "next/navigation";

const fetchLogout = async () => {
  await axiosAuth.post(`${API_URL}/logout/`);
};

export const logout = () => {
  const router = useRouter();
  fetchLogout().then(() => router.push("/auth/login"));
};
