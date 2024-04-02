"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("popstate", () => {
      // window.location.href = "https://www.google.com";
      // window.history.replaceState(null, "", "https://www.google.com");
      // window.location.reload();
      // router.replace("https://www.google.com.br");
      console.log("hiiii");
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
