"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TestComponent() {
  if (typeof window !== "undefined") {
    history.pushState(null, "", null);
  }
  const router = useRouter();
  console.log("quack", router);
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.pushState(null, "", null);
      window.onpopstate = function () {
        console.log("quack..quack...");
        router.push("https://www.google.com.br");
      };
    }
    return () => {
      null;
    };
  }, [router]);

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
