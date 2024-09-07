import { axiosDefault } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
interface ILogin {
  email: string;
  password: string;
}

export const login = async (data: ILogin) => {
  const response = await axiosDefault.post<ILogin>(
    `${API_URL}/jwt/create/`,
    data,
  );
  return response.data;
};
