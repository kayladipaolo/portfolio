"use client";
import { useState } from "react";


export default function ContactPage() {
  const email = "kayladipaolo15@gmail.com";
  const [copied, setCopied] = useState(false);
  const linkedin = "https://www.linkedin.com/in/kayla-dipaolo-300495287/";

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-[var(--blush-100)] bg-white/80 p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Thank you for taking the time to visit my portfolio! I’m always excited
          to connect with new people and explore potential opportunities.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Email */}
          <div className="rounded-3xl border border-[var(--blush-100)] bg-white p-6">
            <div className="text-sm font-semibold">Email</div>

            <div className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              <span className="select-all text-sm font-mono text-zinc-700">
                {email}
              </span>
            <button
            onClick={() => {
                navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition
                ${
                copied
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "border border-[var(--blush-200)] hover:bg-[var(--blush-50)]"
                }
            `}
            >
            {copied ? "Copied ✓" : "Copy"}
            </button>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="block rounded-3xl border border-[var(--blush-100)] bg-white p-6 hover:bg-[var(--blush-50)]"
          >
            <div className="text-sm font-semibold">LinkedIn</div>
            <div className="mt-3 text-sm text-zinc-600">View my LinkedIn profile</div>
          </a>
        </div>
      </section>
    </div>
  );
}
