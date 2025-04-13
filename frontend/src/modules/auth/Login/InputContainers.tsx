import { Label } from "../components/ui/label";
import { LabelInputContainer } from "../components/labelInputContainer";
import { Input } from "../components/ui/input";
import Link from "next/link";
export const InputContainers = ({ register }: any) => {
  return (
    <>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="example@gmail.com"
          type="email"
          {...register("email", { required: true })}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-8">
        <div className="flex justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/auth/password-reset"
            className="text-neutral-400 text-small text-xs hover:text-neutral-300"
          >
            Forgot password ?
          </Link>
        </div>

        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          {...register("password", { required: true })}
        />
      </LabelInputContainer>
    </>
  );
};
