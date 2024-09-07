
import Registration from "@/modules/auth/Registration/Registration";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Registration",
  description: "Crypto/Trading/Bank and finance SaaS application",
};
export default function RegistrationPage() {
  return <Registration />;
}
