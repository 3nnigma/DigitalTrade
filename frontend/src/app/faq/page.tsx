"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/modules/home/components/footer";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How secure is my financial data?",
    answer:
      "We use end-to-end encryption and multi-factor authentication to keep your financial data protected at all times.",
  },
  {
    question: "What assets can I trade?",
    answer:
      "Our platform supports a variety of assets, including cryptocurrencies, stocks, and forex pairs.",
  },
  {
    question: "Are there any trading fees?",
    answer:
      "Yes, we charge competitive fees based on your transaction volume. Detailed fee information is available in your account settings.",
  },
  {
    question: "How do I withdraw funds?",
    answer:
      "Simply navigate to the withdrawal section, choose your method, and confirm your transaction. Processing times vary depending on the method selected.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our mobile app is available on iOS and Android, providing full access to your portfolio and trading tools.",
  },
  {
    question: "How can I enable two-factor authentication (2FA)?",
    answer:
      "You can enable 2FA in your account settings under the security section. We support authenticator apps and SMS-based authentication.",
  },
  {
    question: "What happens if I lose access to my account?",
    answer:
      "If you lose access, you can reset your password using your registered email or contact our support team for assistance.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we have 24/7 customer support via chat, email, and phone to assist you with any issues or questions.",
  },
];

export default function FullSectionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="w-full max-w-7xl mb-20 h-[72vh] mx-auto mt-16 p-8 rounded-lg shadow-md  border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8">
      <div className="md:w-[40%] flex flex-col h-full justify-center items-center text-center p-6 mr-8 bg-[url('/fantasy9.webp')]  bg-no-repeat bg-cover bg-center rounded-xl">
        <h2 className="text-3xl font-semibold text-neutral-100 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-300">
          Find answers to common questions about our platform.
        </p>
      </div>
      <div className="md:w-2/3">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left py-2 px-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
              >
                <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
                  {faq.question}
                </h3>
                <span className="text-lg font-bold text-neutral-600 dark:text-neutral-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 px-4 text-neutral-700 dark:text-neutral-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
   </>
  );
}
