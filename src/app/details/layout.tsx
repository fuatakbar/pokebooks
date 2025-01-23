"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default DetailLayout;
