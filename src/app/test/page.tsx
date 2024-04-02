"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const isBrowser = () => typeof window !== "undefined";

export default function Home() {
  const router = useRouter();
  const path = usePathname();
  // console.log("quack", path.)
  // useEffect(() => {
  const handlePopState = () => {
    // Verifique se o usuário está voltando da página inicial
    // if ( === "/") {
    // Redirecione o usuário para o link externo
    router.push("https://www.google.com");
    // }
    console.log("hi");
  };

  if (isBrowser()) {
    window.addEventListener("popstate", handlePopState);
    console.log("quack");
    // }, []);
    // Remova o ouvinte de evento quando o componente for desmontado
    // return () => window.removeEventListener("popstate", handlePopState);
    // });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-black font-bold">RETORNE DESTA PÁGINA!</h1>
    </main>
  );
}
