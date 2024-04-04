"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function TestComponent() {
  const router = useRouter();
  const pathName = usePathname();
  console.log("quack", router);
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.pushState(null, "", pathName);
      window.onpopstate = function () {
        console.log("quack..quack...", pathName);
        if (pathName == "/test") router.push("https://www.google.com.br");
        else router.refresh();
      };
    }
    return () => {
      null;
    };
  }, [router, pathName]);

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
