"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function TestComponent() {
  const router = useRouter();
  const [isBack, setIsBack] = useState<boolean>(false);
  useEffect(() => {
    // if (typeof window !== "undefined") {
    window.addEventListener("click", function (event) {
      event.preventDefault();
      window.history.pushState({}, "", null);
    });
    window.addEventListener("popstate", function (event) {
      event.preventDefault();
      console.log("User clicked the browser buttons popstate");
      setIsBack(true);
      // window.history.pushState(null, "", "https://www.google.com.br");
      // window.location.reload();
    });
    // }
  }, []);
  useEffect(() => {
    console.log("quack", isBack);
  }, [isBack]);

  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
