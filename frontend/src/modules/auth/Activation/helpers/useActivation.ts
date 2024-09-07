import { errorCatch } from "@/api/error";
import { axiosDefault } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Params = {
  uid: string;
  token: string;
};

const activate = async (params: Params) => {
  const response = await axiosDefault.post(
    `${API_URL}/users/activation/`,
    params,
  );
  return response.data;
};

export default function useActivation() {
  const router = useRouter();
  return useMutation({
    mutationFn: activate,
    onSuccess: () => {
      toast("You have successed activate your account!", {
        description: "Now, you can sign in",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      router.push("/auth/login");
    },
    onError: (error) => {
      toast("Failed to activation account!", {
        description: errorCatch(error),
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      router.push("/");
    },
  });
}
