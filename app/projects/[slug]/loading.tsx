export default function Loading() {
  return (
    <section className="min-h-[calc(100vh-128px)] px-5 sm:px-8 md:px-16 xl:px-24 py-8">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="h-4 w-44 rounded-full bg-surface-container-high animate-pulse" />
          <div className="mt-4 h-12 w-full max-w-2xl rounded-xl bg-surface-container-high animate-pulse" />
          <div className="mt-4 h-6 w-full max-w-3xl rounded-xl bg-surface-container-high animate-pulse" />
        </div>
        <div className="h-12 w-40 rounded-full bg-surface-container-high animate-pulse" />
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface-container-low p-3 sm:p-4">
        <div className="aspect-[16/10] w-full rounded-xl bg-surface-container-high animate-pulse" />
      </div>
    </section>
  );
}
