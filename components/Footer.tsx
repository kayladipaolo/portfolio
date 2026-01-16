export default function Footer() {
  return (
    <footer className="mt-14 border-t border-[var(--blush-100)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-600">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Kayla</span>
          <span className="text-zinc-500">Next.js • Tailwind • Pink & White</span>
        </div>
      </div>
    </footer>
  );
}
