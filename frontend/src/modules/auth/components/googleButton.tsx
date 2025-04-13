import { Chrome } from "lucide-react";
import { BottomGradient } from "./ui/bottomGradient";
import { ContinueWithGoogle } from "../OAuth/utils/ContinueSocialAuth";

export const GoogleButton = () => {
  return (
    <button
      className=" relative group/btn flex space-x-2 items-center ml-2 mb-1 justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      onClick={(e) => {
        ContinueWithGoogle();
        e.preventDefault();
      }}
    >
      <Chrome className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        Google
      </span>
      <BottomGradient />
    </button>
  );
};
