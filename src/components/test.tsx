"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestComponent() {
  const router = useRouter();

  useEffect(() => {
    const handlePopstate = () => {
      window.location.href = "https://www.google.com.br";
      window.location.reload();
      router.push("https://www.google.com.br");
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  });
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
