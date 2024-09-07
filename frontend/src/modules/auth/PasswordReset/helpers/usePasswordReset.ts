import { useRouter } from "next/navigation";
import { passwordReset, passwordResetConfirm } from "./reset.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { errorCatch } from "@/api/error";

export function usePasswordReset(reset: () => void) {
  return useMutation({
    mutationFn: passwordReset,
    onSuccess: () => {
      reset();
      toast("We have send the email message!", {
        description: "Please, check your email, to verify it",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    },
    onError: (error) => {
      toast("Failed to change the password!", {
        description: errorCatch(error),
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    },
  });
}

export function usePasswordResetConfirm(reset: () => void) {
  const router = useRouter();
  return useMutation({
    mutationFn: passwordResetConfirm,
    onSuccess: () => {
      reset();
      toast("You have successed change your password!", {
        description: "Now, you can sign in again",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      router.push("/auth/login");
    },
    onError: (error) => {
      toast("Failed to change the password!", {
        description: errorCatch(error),
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    },
  });
}
