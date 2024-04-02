"use client";
import { useEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
export default function TestComponent() {
  const openBottomsheet = (event: any) => {
    event.preventDefault();
    window.location.hash = "#replace";
    console.log("quack");
    // window.location.replace("//www.google.com.br");
    // window.location.href = "//www.google.com.br";
    // window.location.reload();
    // redirect("//www.google.com.br");
    // window.history.pushState(null, "", "//www.google.com.br");
    // window.history.back();
    //code to handle mounting the bottomsheet on DOM.
  };

  useEffect(() => {
    addEventListener("popstate", (event) => openBottomsheet(event));
    return () => {
      removeEventListener("popstate", (event) => openBottomsheet(event));
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
