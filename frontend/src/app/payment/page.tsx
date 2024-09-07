"use client";
import { useState } from "react";
import { axiosAuth } from "@/api/interceptors";
import { API_URL } from "@/lib/config";

export default function PaymentPage() {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axiosAuth.post(
        `${API_URL}/create-stripe-session/`,
        { amount },
      );
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error("Error creating Stripe session", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Checkout</button>
    </div>
  );
}
