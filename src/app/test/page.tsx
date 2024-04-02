"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.addEventListener("beforepopstate", (event) => {
      if (window.location.pathname === "/test") {
        event.preventDefault();
        window.location.href = "https://www.google.com";
      }
    });

    return () => {
      window.removeEventListener("beforepopstate", (event) => {
        if (window.location.pathname === "/test") {
          event.preventDefault();
          window.location.href = "https://www.google.com";
        }
      });
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-black font-bold">RETORNE DESTA PÁGINA!</h1>
    </main>
  );
}
