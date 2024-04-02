"use client";
import { useEffect, useState } from "react";

export default function TestComponent() {
  const openBottomsheet = () => {
    window.location.replace("https://www.google.com.br");
    window.location.href = "www.google.com.br";
    window.location.reload();
    window.history.pushState(null, "", "https://www.google.com.br");
    window.history.back();
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
