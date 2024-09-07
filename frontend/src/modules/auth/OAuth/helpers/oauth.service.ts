import { axiosDefault } from "@/api/interceptors";
import { API_URL } from "@/lib/config";

export const oauth = async (provider: string, code: string, state: string) => {
  let url: string = "";
  if (provider === "google") {
    url = `${API_URL}/o/${provider}-oauth2/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`;
  } else {
    url = `${API_URL}/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`;
  }

  const response = await axiosDefault.post(url);
  return response.data;
};
