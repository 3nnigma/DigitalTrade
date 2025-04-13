"use client";
import { useState } from "react";
import { axiosAuth } from "@/api/interceptors";
import { API_URL } from "@/lib/config";
import { Input } from "@/components/ui/inputs/input";
import { Banknote, CalendarDays, CircleX, ShieldCheck } from "lucide-react";
import Link from "next/link";

const prices = [
  "10", "20", "50", '100'
]

export default function PaymentPage() {
  const [amount, setAmount] = useState("0");

  const handlePayment = async () => {
    try {
      const response = await axiosAuth.post(
        `${API_URL}/create-stripe-session/`,
        { amount: (Number(amount) + (Number(amount)/100*5)).toFixed(2) }
      );
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error("Error creating Stripe session", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[58%] p-8 pb-16 pt-14 w-[24%] rounded-xl shadow-inner mx-4 border-[rgba(209, 213, 219, 0.7)] mb-12 bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)">
        <h1 className="w-full items-center justify-between flex text-xl border-[rgba(209, 213, 219, 0.7)]  dark:border-[rgba(255,255,255,0.10)] border-b pb-3">
          <div className="flex items-center">
          <span className="text-lg mr-2 opacity-75">Transaction ID</span>
          {`#FX98T12`}
          </div>
          <Link href="/app/dashboard">
          <CircleX className="opacity-75 mr-1"/>
          </Link>
        </h1>
        <div className="w-[90%] h-[360px] mt-4 border-[rgba(88,92,98,0.46)] ml-7 bg-[rgba(81,81,90,0.19)] border rounded-lg mb-4">
          <div className="flex justify-between font-sans text-lg  border-[rgba(209, 213, 219, 0.7)]  dark:border-[rgba(255,255,255,0.10)] border-b pb-3 shadow-inner pt-6 p-4 items-center">
            Total Amount
            <span className="">$ {(Number(amount) + (Number(amount)/100*5)).toFixed(2)}</span>
          </div>
          <div className="p-4">
          <div className="flex px-2 opacity-80 font-sans justify-between items-center">
            Total Fee
            <span>
              $ {(Number(amount)/100 * 5).toFixed(2)}
            </span>
          </div>
          <div className="rounded-xl w-full flex items-center justify-between h-12 bg-[rgba(81,81,90,0.30)] px-4 my-4">
            <CalendarDays className="w-8 h-8 rounded-full bg-blue-400 flex justify-center items-center p-1.5" />
            <div className="font-sans">
              {new Date().toLocaleDateString('en-US', {
                   weekday: 'long',
                   year: 'numeric',
                   month: 'long',
                   day: 'numeric',
                 })}
            </div>
          </div>
          <p className="flex items-center font-sans w-full justify-between px-2 mb-3 mt-7">Enter Amount <Banknote /></p>
          <Input
          className="bg-[rgba(81,81,90,0.30)] py-5 px-4 mt-2 font-sans font-bold"
            type="number"
            min={0}
            max={999999999}
            placeholder="Custom price"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="flex mt-5 items-center">
              {prices.map((price, index) =>
                <div key={index} className={`rouned-xl cursor-pointer ${index == prices.indexOf(amount) ? 'opacity-100' : 'opacity-60'} mx-1 flex justify-center items-center w-24 h-10 bg-[rgba(81,81,90,0.30)]`} onClick={() => setAmount(prices[index])}>
              ${price}
            </div>
            )}
          </div>
          </div>
        </div>
        <p className="flex items-center opacity-70 my-2 ml-7 text-sm">
          All your transactions are protected by encryption
          <ShieldCheck className="ml-2 text-green-300" size={18}/>
        </p>

        <button className="w-[90%] ml-7 h-10 bg-blue-700 rounded-md mt-3 cursor-pointer text-lg hover:bg-blue-800 transition-all" onClick={handlePayment}>Pay</button>
      </div>
    </div>
  );
}
