"use client";

import { useForm } from "react-hook-form";
import { ButtonAuth } from "../components/buttonAuth";
import { LabelInputContainer } from "../components/labelInputContainer";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { usePasswordResetConfirm } from "./helpers/usePasswordReset";

interface IResetConfirm {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
}

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export default function PasswordResetConfirm({ params }: Props) {
  const { register, handleSubmit, reset } = useForm<IResetConfirm>();

  const { mutate } = usePasswordResetConfirm(reset);

  const onSubmit = (data: IResetConfirm) => {
    mutate({ ...params, ...data });
  };
  return (
    <div className="max-w-md w-full mx-auto mt-24 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome back to DigitalTrade
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Confrim to change password to continue working in our service
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">New Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("new_password", { required: true })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="re_password">Confirm New Password</Label>
          <Input
            id="re_password"
            placeholder="••••••••"
            type="password"
            {...register("re_new_password", { required: true })}
          />
        </LabelInputContainer>
        <ButtonAuth formType="Confirm" />

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}
