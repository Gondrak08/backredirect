"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TestComponent() {
  const openBottomsheet = () => {
    window.location.replace("https://www.google.com.br");
    //code to handle mounting the bottomsheet on DOM.
  };

  useEffect(() => {
    addEventListener("popstate", (event) => openBottomsheet());
    return () => {
      removeEventListener("popstate", (event) => openBottomsheet());
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
