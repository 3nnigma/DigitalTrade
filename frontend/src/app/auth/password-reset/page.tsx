import PasswordReset from "@/modules/auth/PasswordReset/PasswordReset";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Reset",
  description: "Crypto/Trading/Bank and finance SaaS application",
};

export default function PasswordResetPage() {
  return <PasswordReset />;
}
