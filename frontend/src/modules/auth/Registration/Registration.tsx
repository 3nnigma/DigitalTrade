"use client";

import { useForm } from "react-hook-form";
import { ButtonAuth } from "../components/buttonAuth";
import { useRegister } from "./helpers/useRegister";

import { GoogleButton } from "../components/googleButton";
import { GithubButton } from "../components/githubButton";
import { InputContainers } from "./InputContainers";
import Link from "next/link";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

interface IRegister {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}

export default function Registration() {
  const { register, handleSubmit, reset } = useForm<IRegister>();

  const { mutate } = useRegister(reset);

  const onSubmit = (data: IRegister) => {
    mutate(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 15, scale: 1.02, filter: "blur(10px)" }}
      animate={{ opacity: 1, rotateX: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-md w-[40%] relative flex flex-col justify-center mx-auto rounded-none md:rounded-2xl h-[92%] p-4 md:p-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-bold text-2xl text-center text-neutral-200"
      >
        Sign Up Account
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-sm max-w-sm mt-2 text-neutral-300"
      >
        Enter your personal data to create your account
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
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 mb-4 h-[1px] w-full"
      />

      <motion.form
        initial={{ opacity: 0, rotateX: 10, y: 15 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputContainers register={register} />
        <ButtonAuth formType="Sign up" />
      </motion.form>

      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 mb-4 h-[1px] w-full"
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
        className="left-[20%] -bottom-10 absolute font-sans text-neutral-500"
      >
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-neutral-400 hover:text-neutral-300"
        >
          Login here
        </Link>
      </motion.p>
    </motion.div>
  );
}
