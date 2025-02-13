import { errorCatch } from "@/api/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login } from "./login.service";

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
      router.push("/app/dashboard");
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
