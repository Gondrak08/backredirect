"use client";
import { useEffect, useState } from "react";
import { useRouter, redirect, usePathname } from "next/navigation";
export default function TestComponent() {
  const [isBack, setIsBack] = useState<boolean>(false);
  const pathName = usePathname();
  // window.location.replace("//www.google.com.br");
  const openBottomsheet = (event: any) => {
    // console.log("quack");
    setIsBack(!isBack);
    window.history.pushState(null, "", null);
    // router.replace("www.google.com");
    // window.history.go(1);
  };

  console.log("pathNaem", pathName);
  useEffect(() => {
    console.log("quack", isBack);
    if (isBack) console.log("isBackChange!", isBack);
    window.history.pushState(null, "", null);
    window.addEventListener("popstate", (event) => openBottomsheet(event));
    return () => {
      window.removeEventListener("popstate", (event) => openBottomsheet(event));
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
