import { axiosDefault } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import Cookies from "js-cookie";

export async function useVerify() {
  const response = await axiosDefault.post(`${API_URL}`, {
    token: Cookies.get("refresh"),
  });
}
