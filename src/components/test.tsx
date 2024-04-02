"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TestComponent() {
  useEffect(() => {
    const handleBackNavigation = (event: any) => {
      // Cancela o comportamento padrão de voltar no histórico do navegador
      event.preventDefault();
      // Redireciona o usuário para www.google.com
      window.location.href = "https://www.google.com";
    };

    // Adiciona um ouvinte ao evento de popstate (quando o usuário clica no botão Voltar do navegador)
    window.addEventListener("popstate", handleBackNavigation);

    // Remove o ouvinte do evento quando o componente é desmontado
    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, []);
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl font-bold text-black mx-auto">
        hello from this shit!
      </h1>
    </div>
  );
}
