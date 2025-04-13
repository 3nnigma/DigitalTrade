"use client";
import Spinner from "@/components/ui/futures/spinner";
import { useSocialAuth } from "./helpers/useSocialAuth";
import { Github } from "lucide-react";

export default function GithubAuth() {
  useSocialAuth("github");

  return (
    <div className="flex h-full w-full relative flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 mr-4 dark:text-gray-100">
            Login with GitHub...
          </h1>
          <Spinner lg />
        </div>
        <Github size={80} className="absolute bottom-4" />
      </div>
    </div>
  );
}
