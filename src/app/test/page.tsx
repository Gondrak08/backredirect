"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.addEventListener("popstate", () => {
      // router.push("https://www.google.com");
      window.location.replace("https://www.google.com");
    });
    return () => window.removeEventListener("popstate", () => {});
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-black font-bold">RETORNE DESTA PÁGINA!</h1>
    </main>
  );
}
