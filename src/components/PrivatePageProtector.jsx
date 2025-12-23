"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PrivatePageProtector = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  if (status === "loading") return;
  if (status === "unauthenticated") {
    router.push(`/auth/login?callbackUrl=${pathname}`);
  }

  return children;
};

export default PrivatePageProtector;
