import { axiosDefault } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
interface IRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}

export const registerUser = async (data: IRegister) => {
  const response = await axiosDefault.post<IRegister>(
    `${API_URL}/users/`,
    data,
  );
  return response.data;
};
