"use client"
import { axiosAuth } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "./store";
import { useEffect } from "react";
import Cookies from "js-cookie";

const fetchUser = async () => {
  const acesssToken = Cookies.get("access");
  const refreshToken = Cookies.get("refresh");

  if (!acesssToken && !refreshToken) {
    return null;
  }

  const response = await axiosAuth.get(`${API_URL}/user/me/`);
  return response.data;
};

export const useUser = () => {
  const { user, setUser } = useAuthStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    retry: 0,
    enabled: !user,
  });
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  return {
    userData: user,
    isLoading,
    error,
  };
};
