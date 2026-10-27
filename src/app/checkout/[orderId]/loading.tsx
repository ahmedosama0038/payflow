export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-pulse space-y-4 rounded-2xl bg-neutral-900 p-4 shadow-lg sm:p-6">
        <div className="h-4 w-40 rounded bg-neutral-800" />
        <div className="h-9 w-48 rounded bg-neutral-800" />
        <div className="h-12 rounded-lg bg-neutral-800" />
        <div className="grid grid-cols-2 gap-4">
          <div className="h-12 rounded-lg bg-neutral-800" />
          <div className="h-12 rounded-lg bg-neutral-800" />
        </div>
        <div className="h-12 rounded-lg bg-blue-900/50" />
      </div>
    </div>
  );
}