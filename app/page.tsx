import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-[var(--blush-100)] bg-white/80 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <p className="text-sm font-medium text-[var(--blush-700)]">
          Portfolio
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Hi, I’m Kayla!
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600">
          Hey there! Thanks for visiting, I appreciate it :) <br></br><br></br>
          A bit about me; I am an undergraduate engineering student in Ontario, Canada, enrolled in a 
          double degree of Mechatronics and Artificial Intelligence Systems Engineering. 
          I look forward to showing you some of the projects I have worked on in my past! Enjoy and don’t hesitate to reach out!
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-[var(--blush-600)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--blush-700)]"
          >
            View Projects
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

      {/* Quick cards */}
      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "API Integration",
            desc: "Connect services, handle auth, automate workflows.",
          },
          {
            title: "AI Project",
            desc: "Data → training → evaluation with repeatable runs.",
          },
          {
            title: "Autonomous Robot",
            desc: "Sensors + state control for reliable autonomy.",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-3xl border border-[var(--blush-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <h3 className="font-semibold">{x.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{x.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
