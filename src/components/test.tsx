"use client";
import { useEffect, useState } from "react";
import { useRouter, redirect, usePathname } from "next/navigation";
export default function TestComponent() {
  const [isBack, setIsBack] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (typeof window != "undefined")
      window.addEventListener("popstate", (event) => {
        setIsBack(true);
        console.log("hii");
      });
  }, []);
  useEffect(() => {
    if (isBack) {
      console.log("isBackChange!", isBack);

      router.push("//www.google.com.br");
    }
  }, [isBack, router]);
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
