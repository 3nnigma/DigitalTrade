import { axiosDefault } from "@/api/interceptors";
import { API_URL } from "@/lib/config";

export const passwordReset = async (data: { email: string }) => {
  const response = await axiosDefault.post(
    `${API_URL}/users/reset_password/`,
    data,
  );
  return response.data;
};

interface IResetConfirm {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
}

export const passwordResetConfirm = async (data: IResetConfirm) => {
  const response = await axiosDefault.post(
    `${API_URL}/users/reset_password_confirm/`,
    data,
  );
  return response.data;
};
