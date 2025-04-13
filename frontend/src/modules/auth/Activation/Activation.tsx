"use client";

import Spinner from "@/components/ui/futures/spinner";
import { useEffect } from "react";
import useActivation from "./helpers/useActivation";

type Props = {
  params: {
    uid: string;
    token: string;
  };
};

export default function Activation({ params }: Props) {
  const { mutate } = useActivation();
  useEffect(() => {
    mutate(params);
  }, []);

  return (
    <div className="flex min-h-screen w-ful flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex justify-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 mr-4 dark:text-gray-100">
          Activation...
        </h1>
        <Spinner lg />
      </div>
    </div>
  );
}
