import Login from "@/modules/auth/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Crypto/Trading/Bank and finance SaaS application",
};

export default function LoginPage() {
  return <Login />;
}
