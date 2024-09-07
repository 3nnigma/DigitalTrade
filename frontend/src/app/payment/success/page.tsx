"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/config";
import { axiosAuth } from "@/api/interceptors";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const session_id = new URLSearchParams(window.location.search).get(
      "session_id",
    );

    if (session_id) {
      axiosAuth
        .post(`${API_URL}/check-payment-status/`, { session_id })
        .then((_response) => {
          console.log("Payment was successful. User balance updated.");
        })
        .catch((_error) => {
          setError("Payment verification failed.");
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => router.push("/dashboard"), 2000);
        });
    } else {
      setError("No session ID found.");
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div>Payment successful! Your balance has been updated.</div>;
}
