import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--blush-200)] bg-white px-4 py-2 text-sm text-zinc-800 hover:bg-[var(--blush-50)]"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <section className="rounded-3xl border border-[var(--blush-100)] bg-white/80 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <p className="text-sm font-medium text-[var(--blush-700)]">Project</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">{p.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--blush-100)] bg-white px-3 py-1 text-xs text-zinc-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>


      {(p.heroImage || p.videoSrc) && (
        <section className="space-y-3">
            <div className="overflow-hidden rounded-3xl border border-[var(--blush-100)] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            {p.heroImage && (
                <div className="relative aspect-[16/10] w-full bg-white">
                <Image
                    src={p.heroImage}
                    alt={`${p.title} architecture diagram`}
                    fill
                    className="object-contain p-4"
                    priority
                />
                </div>
            )}

            {p.videoSrc && (
                <video
                className="w-full aspect-video bg-black"
                src={p.videoSrc}
                controls
                playsInline
                />
            )}
            </div>

            <p className="text-sm text-zinc-500">
            High-level overview of how user input flows through the system and into a final recommendation.
            </p>
        </section>
     )}

      {/* Overview boxes */}
      <section className="grid gap-4 md:grid-cols-2">
        {[
          { label: "Overview", value: p.overview },
          { label: "Problem", value: p.problem },
          { label: "Solution", value: p.solution },
          { label: "Outcome", value: p.outcome },
        ].map((x) => (
          <div
            key={x.label}
            className="rounded-3xl border border-[var(--blush-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <h2 className="text-sm font-semibold">{x.label}</h2>
            <p className="mt-2 text-sm text-zinc-600">{x.value}</p>
          </div>
        ))}
      </section>

      {/* What I did */}
      <section className="rounded-3xl border border-[var(--blush-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h2 className="font-semibold">What I did</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-600">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Challenges + learnings (optional) */}
      {(p.challenges?.length || p.learnings?.length) && (
        <section className="grid gap-4 md:grid-cols-2">
          {p.challenges?.length ? (
            <div className="rounded-3xl border border-[var(--blush-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h2 className="font-semibold">Challenges</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-600">
                {p.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {p.learnings?.length ? (
            <div className="rounded-3xl border border-[var(--blush-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h2 className="font-semibold">What I learned</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-600">
                {p.learnings.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      )}

      {/* Links (optional) */}
      {p.links?.length ? (
        <section className="rounded-3xl border border-[var(--blush-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <h2 className="font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {p.links.map((lnk) => (
              <a
                key={lnk.href}
                href={lnk.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--blush-600)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--blush-700)]"
              >
                {lnk.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
