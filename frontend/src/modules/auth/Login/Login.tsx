"use client";

import { GoogleButton } from "../components/googleButton";
import { GithubButton } from "../components/githubButton";
import { ButtonAuth } from "../components/buttonAuth";
import { InputContainers } from "./InputContainers";
import { useForm } from "react-hook-form";
import { useLogin } from "./helpers/useLogin";
import Link from "next/link";

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
    <div className="mt-12 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome back to DigitalTrade
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign in to your account for convenient and organized work in our service
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <InputContainers register={register} />

        <ButtonAuth formType="Sign in" />

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <GithubButton />
          <GoogleButton />
        </div>
      </form>
      <p className="mt-10 text-center text-sm font-mono text-gray-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="text-neutral-400 hover:text-neutral-300"
        >
          Register here
        </Link>
      </p>
    </div>
  );
}
