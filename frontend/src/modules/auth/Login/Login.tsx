"use client";

import { GoogleButton } from "../components/googleButton";
import { GithubButton } from "../components/githubButton";
import { ButtonAuth } from "../components/buttonAuth";
import { InputContainers } from "./InputContainers";
import { useForm } from "react-hook-form";
import { useLogin } from "./helpers/useLogin";
import Link from "next/link";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

interface ILogin {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, reset } = useForm<ILogin>();

  const { mutate } = useLogin(reset);

  const onSubmit = (data: ILogin) => {
    mutate(data);
  };

  return (
    <motion.div
         initial={{ opacity: 0, scale: 1.05,  filter: "blur(10px)" }}
         animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="max-w-md w-[40%] relative flex flex-col justify-center mx-auto rounded-none md:rounded-2xl h-[92%] p-4 md:p-8"
       >
         <motion.h2
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="font-bold text-2xl text-center text-neutral-200"
         >
           Welcome Back
         </motion.h2>

         <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="text-center text-sm max-w-sm mt-2 text-neutral-300"
         >
           Enter your email and password to access your account
         </motion.p>

         <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.8 }}
           className="flex justify-between mt-8"
         >
           <GithubButton />
           <GoogleButton />
         </motion.div>

         <motion.div
           initial={{ opacity: 0, width: "0%" }}
           animate={{ opacity: 1, width: "100%" }}
           transition={{ duration: 0.8, delay: 1 }}
           className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-7 mb-4 h-[1px] w-full"
         />

         <motion.form
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, delay: 1.1 }}
           className="my-5"
           onSubmit={handleSubmit(onSubmit)}
         >
           <InputContainers register={register} />
           <ButtonAuth formType="Sign in" />
         </motion.form>

         <motion.div
           initial={{ opacity: 0, width: "0%" }}
           animate={{ opacity: 1, width: "100%" }}
           transition={{ duration: 0.8, delay: 1.4 }}
           className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 mb-5 h-[1px] w-full"
         />

         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 1.6 }}
           className="md:block hidden mx-auto pl-10"
         >
           <Logo />
         </motion.div>

         <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.8 }}
           className="left-[20%] -bottom-8 absolute font-sans text-neutral-500"
         >
           Don&apos;t have an account?{" "}
           <Link href="/auth/register" className="text-neutral-400 hover:text-neutral-300">
             Register here
           </Link>
         </motion.p>
       </motion.div>
  );
}

// <div className="mt-24 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 py-6 md:p-8 md:py-10 ">
//      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//        Welcome back
//      </h2>
//      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//        Enter your email and password to access your account
//      </p>

//      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
//        <InputContainers register={register} />

//        <ButtonAuth formType="Sign in" />

//        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//        <div className="flex flex-col space-y-4">
//          <GithubButton />
//          <GoogleButton />
//        </div>
//      </form>
//      <p className="mt-10 text-center text-sm font-mono text-gray-500">
//        Don&apos;t have an account?{" "}
//        <Link
//          href="/auth/register"
//          className="text-neutral-400 hover:text-neutral-300"
//        >
//          Register here
//        </Link>
//      </p>
//    </div>
