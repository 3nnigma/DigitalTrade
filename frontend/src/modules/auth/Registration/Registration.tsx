"use client";

import { useForm } from "react-hook-form";
import { ButtonAuth } from "../components/buttonAuth";
import { useRegister } from "./helpers/useRegister";

import { GoogleButton } from "../components/googleButton";
import { GithubButton } from "../components/githubButton";
import { InputContainers } from "./InputContainers";
import Link from "next/link";

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
    <div className="max-w-md w-full mt-4 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to DigitalTrade
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Create an account for convenient and organized work in our service
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <InputContainers register={register} />
        <ButtonAuth formType="Sign up" />

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <GithubButton />
          <GoogleButton />
        </div>
      </form>
      <p className="mt-8 text-center text-sm font-mono text-gray-500">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-neutral-400 hover:text-neutral-300"
        >
          Login here
        </Link>
      </p>
    </div>
  );
}
