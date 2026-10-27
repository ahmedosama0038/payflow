"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="text-gray-400">We could not load this payment.</p>
      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500"
      >
        Try again
      </button>
    </main>
  );
}