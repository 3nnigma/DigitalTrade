import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { oauth } from "./oauth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { errorCatch } from "@/api/error";

export function useSocialAuth(provider: string) {
  const searchParams = useSearchParams();
  const effectRef = useRef(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async ({ code, state }: { code: string; state: string }) => {
      return oauth(provider, code, state);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
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
      }),
        router.push("/");
    },
  });

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state && !effectRef.current) {
      mutation.mutate({ code, state });
      effectRef.current = true;
    }
  }, [mutation, provider, searchParams]);
  return mutation;
}
