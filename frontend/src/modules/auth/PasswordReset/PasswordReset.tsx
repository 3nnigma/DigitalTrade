"use client";
import { useForm } from "react-hook-form";
import { ButtonAuth } from "../components/buttonAuth";
import { LabelInputContainer } from "../components/labelInputContainer";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { usePasswordReset } from "./helpers/usePasswordReset";

interface IReset {
  email: string;
}

export default function PasswordReset() {
  const { register, handleSubmit, reset } = useForm<IReset>();

  const { mutate } = usePasswordReset(reset);

  const onSubmit = (data: IReset) => {
    mutate(data);
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 mt-20 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome back to DigitalTrade
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Change your password to continue working in our service
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="example@gmail.com"
            type="email"
            {...register("email", { required: true })}
          />
        </LabelInputContainer>
        <ButtonAuth formType="Reset" />

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}
