import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-4xl font-bold">Payment link not found</h1>
      <p className="text-gray-400">This link is invalid or incomplete.</p>
      <Link
        href="/create"
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500"
      >
        Create a new payment
      </Link>
    </main>
  );
}