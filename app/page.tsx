import Link from "next/link";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-[var(--blush-100)] bg-white/80 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <p className="text-sm font-medium text-[var(--blush-700)]">
          Portfolio
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Hi, I'm Kayla!
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600">
          Hey there! Thanks for visiting, I appreciate it :) <br /><br />
          I'm an undergraduate Mechatronics & AI Systems Engineering student at
          Western University. Below are some of the projects I have worked on —
          spanning embedded systems, mechanical design, time-series forecasting,
          and autonomy. Enjoy and don't hesitate to reach out!
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-[var(--blush-600)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--blush-700)]"
          >
            View All Projects
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-[var(--blush-200)] px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-[var(--blush-50)]"
          >
            About Me
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-[var(--blush-200)] px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-[var(--blush-50)]"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Project cards */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-1 text-sm text-zinc-500">
              A selection of builds spanning embedded systems, mechanical design,
              machine learning, and autonomy.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--blush-700)] hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-3xl border border-[var(--blush-100)] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--blush-200)]"
            >
              {p.heroImage && (
                <div className="overflow-hidden rounded-t-[calc(1.5rem-1px)]">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="h-40 w-full object-cover transition group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-semibold tracking-tight group-hover:text-[var(--blush-700)]">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
                  {p.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--blush-100)] bg-white px-2.5 py-0.5 text-[11px] text-zinc-600"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="rounded-full border border-[var(--blush-100)] bg-white px-2.5 py-0.5 text-[11px] text-zinc-400">
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
