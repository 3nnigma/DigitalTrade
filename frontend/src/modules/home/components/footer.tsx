import { Facebook, Github, Linkedin, Twitter, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark:bg-black border-t bg-gray-100 border-zinc-300 dark:border-zinc-700 ">
      <div className="mx-auto max-w-screen-2xl space-y-8 py-16 lg:space-y-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="DigitalTrade Logo"
                width={32}
                height={32}
                priority
              />

              <span className="flex ml-1.5 w-44 items-center scroll-m-20 text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-100 to-blue-500 bg-clip-text text-transparent">
                  Digital
                </span>
                Trade
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Access professional analytical tools that help you make informed
              decisions in the financial markets.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <Facebook size={22} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <Github size={22} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <Twitter size={22} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <Youtube size={22} />
                </a>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <Linkedin size={22} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Services
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Buy Crypto
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Banking app
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Futures (Coming soon)
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Spot Trading
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Financial Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Meet Our Experts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    DigitalTrade Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Our Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Support
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Crypto Price
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    24/7 Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Resources
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accessibility & Security
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Return Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Analytics & Statistics
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; 2025. DigitalTrade inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
