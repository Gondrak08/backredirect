"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  // const handlePopState = useCallback(() => {
  // router.push("https://www.google.com.br");
  // }, [router]);

  function handlePopState() {
    window.history.pushState(null, "", `https://www.google.com.br"`);
    window.location.reload();
    router.push("https://www.google.com.br");
  }
  useEffect(() => {
    window.onhashchange = function () {
      window.history.pushState(null, "", `https://www.google.com.br"`);
      window.location.reload();
      router.push("https://www.google.com.br");
      console.log("quack");
    };
    // window.addEventListener("hashchange", handlePopState);
    // return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-black font-bold">RETORNE DESTA PÁGINA!</h1>
    </main>
  );
}
