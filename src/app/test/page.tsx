"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handlePopState = useCallback(() => {
    router.push("https://www.google.com.br");
  }, [router]);
  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
  }, [handlePopState]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-black font-bold">RETORNE DESTA PÁGINA!</h1>
    </main>
  );
}
