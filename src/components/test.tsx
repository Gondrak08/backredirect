"use client";
import { useEffect, useState } from "react";
// import { useRouter, redirect, usePathname } from "next/navigation";

export default function TestComponent() {
  if (typeof window !== "undefined") {
    console.log("quack", window);
    window.addEventListener("popstate", function () {
      alert("it works");
      window.history.pushState(null, "", "https://www.google.com.br");
      window.location.reload();
    });
  }
  // useEffect(() => {
  //   history.pushState(null, "", null);
  //   window.addEventListener("popstate", function () {
  //   history.pushState(null, "", null);
  //   });
  // });
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
