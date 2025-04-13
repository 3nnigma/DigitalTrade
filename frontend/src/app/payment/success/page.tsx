"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/config";
import { axiosAuth } from "@/api/interceptors";
import { useRouter } from "next/navigation";
import CurrencyTransfer from "@/components/common/paymentSuccess";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [localAmount, setLocalAmount] = useState(0.0);
  const router = useRouter();

  useEffect(() => {
    const session_id = new URLSearchParams(window.location.search).get(
      "session_id",
    );

    if (session_id) {
      axiosAuth
        .post(`${API_URL}/check-payment-status/`, { session_id })
        .then((response) => {
          setLocalAmount(response.data.amount);
        })
        .catch((_error) => {
          setError("Payment verification failed.");
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => router.push("/app/dashboard"), 7500);
        });
    } else {
      setError("No session ID found.");
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <CurrencyTransfer
        amount={(localAmount / 1.05).toFixed(2)}
        totalFee={(localAmount - localAmount / 1.05).toFixed(2)}
        totalAmount={localAmount.toFixed(2)}
      />
    </div>
  );
}
