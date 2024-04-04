"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function TestComponent() {
  const router = useRouter();
  const pathName = usePathname();
  console.log("quack", router);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // history.pushState(null, "", pathName);
      window.onpopstate = function () {
        if (pathName == "/test") {
          router.replace("https://www.google.com.br");
          console.log("quack..quack...", pathName);
          router.refresh();
        } else router.refresh();
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
