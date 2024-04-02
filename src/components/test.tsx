"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TestComponent() {
  const router = useRouter();
  const [isBack, setIsBack] = useState<boolean>(false);
  useEffect(() => {
    window.onpopstate = () => {
      history.replaceState(null, "", "www.google.com.br");
      router.push("www.google.com.br");
    };
  }, []);
  // window.addEventListener("click", function () {
  //   window.history.pushState({}, "", null);
  // });
  // window.addEventListener("popstate", function () {
  //   console.log("User clicked the browser buttons popstate");
  // });
  // const router = useRouter();
  //
  // useEffect(() => {
  //   const handlePopstate = () => {
  // window.location.href = "https://www.google.com.br";
  // window.location.reload();
  //     router.push("https://www.google.com.br");
  //     window.history.pushState(null, "", "https://www.google.com.br");
  //     router.back();
  //   };
  //
  //   window.addEventListener("popstate", handlePopstate);
  //
  //   return () => {
  //     window.removeEventListener("popstate", handlePopstate);
  //   };
  // });
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
