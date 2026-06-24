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
        className="inline-flex items-center gap-2 rounded-full border border-[var(--surface-200)] bg-white px-4 py-2 text-sm text-[var(--surface-900)] hover:bg-[var(--surface-50)]"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <section className="rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)]/80 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <p className="text-sm font-medium text-[var(--surface-700)]">Project</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{p.title}</h1>
        <p className="mt-3 max-w-2xl text-[var(--surface-500)]">{p.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--surface-100)] bg-[var(--surface-50)] px-3 py-1 text-xs text-[var(--surface-700)]"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {p.heroImage && (
        <section className="overflow-hidden rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="relative aspect-[16/9] w-full bg-[var(--surface-50)]">
            <Image
              src={p.heroImage}
              alt={`${p.title} main project image`}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </section>
      )}

      {p.sections?.length ? (
        <section className="space-y-20">
          {p.sections.map((section) => (
            <div
              key={section.title}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                section.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h2 className="mb-6 text-4xl font-bold text-[var(--ink)]">
                  {section.title}
                </h2>
                <p className="text-lg leading-8 text-[var(--muted)]">
                  {section.text}
                </p>
              </div>

              {section.images && section.images.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {section.images.map((src, i) => (
                    <div key={src + i} className="overflow-hidden rounded-2xl border border-[var(--surface-100)] bg-[var(--surface-50)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                      <div className="relative aspect-[16/10] w-full bg-[var(--surface-50)]">
                        <Image src={src} alt={`${section.title} ${i + 1}`} fill className="object-contain p-3" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : section.images && section.images.length > 0 ? (
                <div className={`grid gap-3 ${section.images.length === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                  {section.images.map((src, i) => (
                    <div key={src + i} className="overflow-hidden rounded-2xl border border-[var(--surface-100)] bg-[var(--surface-50)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                      <div className="relative aspect-[16/10] w-full bg-[var(--surface-50)]">
                        <Image src={src} alt={`${section.title} ${i + 1}`} fill className="object-contain p-3" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {p.videos?.length ? (
        <section className="rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Demo
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--ink)]">
              Live System Demonstrations
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {p.videos.map((src, index) => (
              <div key={src} className="space-y-3">
                <h3 className="font-semibold">
                  {index === 0 ? "Autonomous Mode" : "Manual Control"}
                </h3>

                <video
                  className="w-full rounded-2xl border border-[var(--surface-100)] bg-black"
                  src={src}
                  controls
                  playsInline
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Overview boxes */}

      {/* Key Contributions */}
      <section className="rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h2 className="font-semibold">Key Contributions</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--surface-500)]">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Challenges + learnings (optional) */}
      {(p.challenges?.length || p.learnings?.length) && (
        <section className="grid gap-4 md:grid-cols-2">
          {p.challenges?.length ? (
            <div className="rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h2 className="font-semibold">Challenges</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--surface-500)]">
                {p.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {p.learnings?.length ? (
            <div className="rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h2 className="font-semibold">What I learned</h2>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--surface-500)]">
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
        <section className="rounded-3xl border border-[var(--surface-100)] bg-[var(--surface-50)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <h2 className="font-semibold">Links</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {p.links.map((lnk) => (
              <a
                key={lnk.href}
                href={lnk.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--surface-700)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--surface-700)]"
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
