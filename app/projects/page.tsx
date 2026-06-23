import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-[var(--surface-100)] bg-white/80 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-2 text-zinc-600">
          A few builds I’m proud of — complex problem, far from clear solution ;), real outcome (thank goodness).
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-3xl border border-[var(--surface-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--surface-200)]"
          >
            <h2 className="text-lg font-semibold tracking-tight group-hover:text-[var(--surface-700)]">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">{p.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--surface-100)] bg-white px-3 py-1 text-xs text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
