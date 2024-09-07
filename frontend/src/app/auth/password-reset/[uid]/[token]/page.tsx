import PasswordResetConfirm from "@/modules/auth/PasswordReset/PasswordResetConfirm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Reset Confirm",
  description: "Crypto/Trading/Bank and finance SaaS application",
};

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export default function PasswordResetConfirmPage({ params }: Props) {
  return <PasswordResetConfirm params={params} />;
}
