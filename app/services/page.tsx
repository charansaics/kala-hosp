import Link from "next/link";
import { Footer, Header } from "@/components/hospital-sections";
import { services } from "@/components/hospital-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020b1a] text-white">
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#020b1a_0%,_#081c2c_30%,_#0f172a_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Our services</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Complete specialist care under one roof.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We deliver integrated healthcare solutions across emergency, diagnostic, family, and specialty services with a focus on outcomes and patient comfort.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[30px] border border-slate-700 bg-slate-900 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.28)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-500/10 text-3xl">
                {service.icon}
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Patient experience</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">What you can expect from us</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Rapid emergency response and triage",
              "Accurate diagnostics and specialist interpretation",
              "Seamless support from admission to recovery",
            ].map((item, index) => (
              <div key={item} className="rounded-[26px] border border-cyan-400/20 bg-white/5 p-6">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">0{index + 1}</div>
                <p className="mt-4 text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Need specialist guidance?</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Our care teams are ready to help with treatment planning, referrals, and urgent medical support.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_16px_30px_rgba(34,211,238,0.2)]"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
