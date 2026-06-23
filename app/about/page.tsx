export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-[var(--surface-100)] bg-white/80 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight">About Me :)</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
        Hardworking, curious, and I like figuring things out rather than waiting for an answer. I tend to learn by doing, and I’d much rather build something wrong and fix it than wait until it’s perfect on paper. I ask a lot of questions, I’m direct in how I work, and when something is unclear I’ll keep at it until it makes sense.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--surface-100)] bg-white p-6">
            <h2 className="font-semibold">What I’m like to work with</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-600">
            <li>Highly motivated and not afraid of hard problems</li>
            <li>Outgoing, talkative, and comfortable speaking up</li>
            <li>Determined to finish what I start</li>
            <li>Enjoys collaboration and bouncing ideas off others</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[var(--surface-100)] bg-white p-6">
            <h2 className="font-semibold">What drives me</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-zinc-600">
            <li>Loving a good challenge and learning under pressure</li>
            <li>Meeting new people and working in team environments</li>
            <li>Growing through hands-on projects, not just theory</li>
            <li>Taking on opportunities that push me outside my comfort zone</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--surface-100)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h2 className="font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Machine Learning",
            "Python",
            "APIs",
            "Git",
            "Sensors",
            "Robotics",
            "Microcontrollers",
            "C/C++",
            "Data Analysis",
            "SQL",
            "Computer Vision",
            "MATLAB",
            "CAD",
            "Raspberry Pi",
            "Arduino",
            "Collaboration",
            "Problem Solving",
            "Critical Thinking",
            "Time Management",
            "Data Preprocessing",
            "Model Training",
            "System Architecture",
            "Strong work ethic",
          ].map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--surface-100)] bg-white px-3 py-1 text-xs text-zinc-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
