"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handlePopstate = () => {
      // Redireciona o usuário para fora do site
      window.location.replace("https://www.google.com");
    };

    // Adicione um listener para o evento 'popstate'
    window.addEventListener("popstate", handlePopstate);

    // Retorne a função de limpeza para remover o listener
    return () => window.removeEventListener("popstate", handlePopstate);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-black font-bold">RETORNE DESTA PÁGINA!</h1>
    </main>
  );
}
