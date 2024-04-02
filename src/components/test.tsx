"use client";
import { useEffect, useState } from "react";
import { useRouter, redirect, usePathname } from "next/navigation";
export default function TestComponent() {
  const router = useRouter();
  const pathName = usePathname();
  // window.location.replace("//www.google.com.br");
  const openBottomsheet = (event: any) => {
    console.log("quack");
    router.replace("www.google.com");
    window.history.go(1);
  };

  console.log("pathNaem", pathName);
  useEffect(() => {
    window.history.pushState(null, "", "www.google.com.br");
    window.addEventListener("popstate", (event) => openBottomsheet);
    return () => {
      window.removeEventListener("popstate", (event) => openBottomsheet);
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
