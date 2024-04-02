"use client";
import { useEffect, useState } from "react";
import { useRouter, redirect, usePathname } from "next/navigation";
export default function TestComponent() {
  const [isBack, setIsBack] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();
  // window.location.replace("//www.google.com.br");
  // const openBottomsheet = (event: any) => {
  //   // console.log("quack");
  //   setIsBack(!isBack);
  //   window.history.pushState(null, "", null);
  //   // router.replace("www.google.com");
  //   // window.history.go(1);
  // };

  console.log("pathNaem", pathName);
  useEffect(() => {
    window.history.pushState(null, "", null);
    window.addEventListener("popstate", (event) => {
      setIsBack(true);
      console.log("hii");
    });
    // return () => {
    //   window.removeEventListener("popstate", (event) =>{} );
    // };
  });
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
