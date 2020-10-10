import React from "react";

import { auth } from "@/config/firebase";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();

  auth.signOut().finally(() => router.push("/login"));
  return <div></div>;
}
