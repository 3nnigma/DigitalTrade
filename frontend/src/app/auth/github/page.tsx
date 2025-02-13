import GithubAuth from "@/modules/auth/OAuth/GithubAuth";
import { Suspense } from "react";

export default function Github() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GithubAuth />
    </Suspense>
  );
}
