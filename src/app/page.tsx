import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/test"
        className="border border-white rounded-md bg-black text-white p-3"
      >
        ir para outra página
      </Link>
    </main>
  );
}
