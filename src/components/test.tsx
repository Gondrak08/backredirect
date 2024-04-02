"use client";
import { useEffect, useState } from "react";
// import { useRouter, redirect, usePathname } from "next/navigation";
export default function TestComponent() {
  useEffect(() => {
    window.addEventListener("popstate", function () {
      history.pushState(null, "", window.location.href);
    });
  });
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
