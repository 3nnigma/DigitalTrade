import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "./register.service";
import { errorCatch } from "@/api/error";

export function useRegister(reset: () => void) {
  const router = useRouter();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      reset();
      toast("You have successed register!", {
        description: "Check email to verify your account!",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      router.push("/auth/login");
    },
    onError: (error) => {
      toast("Failed to register account!", {
        description: errorCatch(error),
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    },
  });
}
