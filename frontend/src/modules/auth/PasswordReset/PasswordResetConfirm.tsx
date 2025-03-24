"use client";

import { useForm } from "react-hook-form";
import { ButtonAuth } from "../components/buttonAuth";
import { LabelInputContainer } from "../components/labelInputContainer";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { usePasswordResetConfirm } from "./helpers/usePasswordReset";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

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
    <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-[40%] relative flex flex-col justify-center mx-auto rounded-none md:rounded-2xl h-[92%] p-4 md:p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-bold text-2xl text-center text-neutral-200"
        >
          Change Password
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm max-w-sm mt-2 text-neutral-300"
        >
          Create new password and confirm to change it
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                {...register("new_password", { required: true })}
              />
            </LabelInputContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <LabelInputContainer className="mb-8">
              <Label htmlFor="re_password">Confirm New Password</Label>
              <Input
                id="re_password"
                placeholder="••••••••"
                type="password"
                {...register("re_new_password", { required: true })}
              />
            </LabelInputContainer>
          </motion.div>

          <ButtonAuth formType="Change" />
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
      </motion.div>
  );
}
