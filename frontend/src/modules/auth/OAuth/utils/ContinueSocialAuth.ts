import { API_URL } from "@/lib/config";
import axios from "axios";
import { toast } from "sonner";

async function continueWithSocialAuth(provider: string, redirect: string) {
  try {
    let url;
    if (provider === "google") {
      url = `${API_URL}/o/${provider}-oauth2/?redirect_uri=http://localhost:3000/auth/${redirect}`;
    } else {
      url = `${API_URL}/o/${provider}/?redirect_uri=http://localhost:3000/auth/${redirect}`;
    }

    const response = await axios.get(url, {
      withCredentials: true,
    });
    const data = response.data;

    if (response.status === 200 && typeof window !== "undefined") {
      window.location.replace(data.authorization_url);
    } else {
      toast(`Failed to sign in with ${provider}!`, {
        description: "Please, try again",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  } catch {}
}

export const ContinueWithGithub = () =>
  continueWithSocialAuth("github", "github");
export const ContinueWithGoogle = () =>
  continueWithSocialAuth("google", "google");
