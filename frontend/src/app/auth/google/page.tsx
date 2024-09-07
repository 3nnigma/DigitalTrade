import GoogleAuth from "@/modules/auth/OAuth/GoogleAuth";
import { Suspense } from "react";

export default function Google() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GoogleAuth />
    </Suspense>
  );
}
