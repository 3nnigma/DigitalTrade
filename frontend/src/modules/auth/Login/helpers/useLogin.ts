import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { login } from "./login.service";
import { errorCatch } from "@/api/error";

export function useLogin(reset: () => void) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast("You have successed sign in your account", {
        description: "Welcome back!",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      router.push("/");
    },
    onError: (error) => {
      toast("Failed to sign in your account!", {
        description: errorCatch(error),
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    },
  });
}
