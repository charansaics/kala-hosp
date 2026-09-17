import Link from "next/link";
import { Footer, Header } from "@/components/hospital-sections";
import { highlights, stats } from "@/components/hospital-data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020b1a] text-white">
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#020b1a_0%,_#081c2c_30%,_#0f172a_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">About Kala Hospitals</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Compassionate care driven by clinical excellence.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We are a multi-speciality hospital dedicated to delivering advanced clinical care with a patient-first mindset.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 text-slate-300">
            <p>
              Kala Hospitals offers a complete spectrum of healthcare services across major specialties, supported by a highly skilled team of consultants, nurses, and support staff.
            </p>
            <p>
              With a focus on early diagnosis, timely intervention, and transparent patient communication, we aim to make hospital care reassuring, efficient, and deeply human.
            </p>
            <p>
              Our 110-bedded facility combines modern infrastructure, technology-led diagnostics, and a warm, family-friendly atmosphere designed for recovery and peace of mind.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-slate-700 bg-slate-900 p-3 shadow-[0_20px_50px_rgba(14,165,233,0.12)]">
            <img
              src="https://kalahospitals.com/images/face.png"
              alt="Hospital team"
              className="h-[420px] w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Our promise</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Professional care, human connection.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[26px] border border-cyan-400/20 bg-white/5 p-5">
                <div className="text-3xl font-black text-cyan-300">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Why choose us</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">The standards behind our care</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item} className="rounded-[26px] border border-slate-700 bg-slate-900 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-300">✓</div>
              <p className="text-base font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sky-950/40 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Leadership</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Led by Dr. P.V. Ramana Murthy</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Under the leadership of Dr. P.V. Ramana Murthy, our team is committed to thoughtful clinical practice, patient dignity, and a culture of trust and accountability.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_16px_30px_rgba(34,211,238,0.2)]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
