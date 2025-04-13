import { Github } from "lucide-react";
import { ContinueWithGithub } from "../OAuth/utils/ContinueSocialAuth";
import { BottomGradient } from "./ui/bottomGradient";

export const GithubButton = () => {
  return (
    <button
      className="relative group/btn mr-2  flex space-x-2 items-center justify-center px-4 mb-1 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
      onClick={(e) => {
        ContinueWithGithub();
        e.preventDefault();
      }}
    >
      <Github className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        GitHub
      </span>
      <BottomGradient />
    </button>
  );
};
