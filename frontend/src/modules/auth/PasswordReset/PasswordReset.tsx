"use client";
import { useForm } from "react-hook-form";
import { ButtonAuth } from "../components/buttonAuth";
import { LabelInputContainer } from "../components/labelInputContainer";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { usePasswordReset } from "./helpers/usePasswordReset";
import Logo from "@/components/Logo";
import { motion } from "framer-motion";

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
    <motion.div
         initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
         animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="max-w-md w-[40%] relative flex flex-col justify-center mx-auto rounded-none md:rounded-2xl h-[92%] p-4 md:p-8"
       >
         <motion.h2
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="font-bold text-2xl text-center text-neutral-200"
         >
           Confirm Email
         </motion.h2>

         <motion.p
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="text-center text-sm max-w-sm mt-2 text-neutral-300"
         >
           Enter your email to change your account's password
         </motion.p>

         <motion.form
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="my-8"
           onSubmit={handleSubmit(onSubmit)}
         >
           <LabelInputContainer className="mb-8">
             <Label htmlFor="email">Email Address</Label>
             <Input
               id="email"
               placeholder="example@gmail.com"
               type="email"
               {...register("email", { required: true })}
             />
           </LabelInputContainer>
           <ButtonAuth formType="Confirm" />
         </motion.form>

         <motion.div
           initial={{ opacity: 0, width: "0%" }}
           animate={{ opacity: 1, width: "100%" }}
           transition={{ duration: 0.8, delay: 1 }}
           className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 mb-4 h-[1px] w-full"
         />

         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 1.2 }}
           className="md:block hidden mx-auto pl-10"
         >
           <Logo />
         </motion.div>
       </motion.div>
  );
}
