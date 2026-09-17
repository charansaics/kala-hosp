import { Footer, Header } from "@/components/hospital-sections";
import AppointmentForm from "@/components/appointment-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020b1a] text-white">
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#020b1a_0%,_#081c2c_30%,_#0f172a_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Contact us</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              We’re here when you need expert care.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Reach out for appointments, specialist guidance, or emergency assistance from our dedicated care team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-slate-700 bg-slate-900 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.2)]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Visit us</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">Kala Hospitals Pvt Ltd</h2>
              <div className="mt-5 space-y-3 text-base text-slate-300">
                <p>Dr. P.V. Ramana Murthy</p>
                <p>Door No 47-1-104, 6th Lane, Dwaraka Nagar</p>
                <p>Visakhapatnam, Andhra Pradesh – 500 016</p>
              </div>
            </div>

            <div className="rounded-[30px] border border-cyan-500/20 bg-cyan-500/10 p-6 shadow-[0_18px_40px_rgba(14,165,233,0.08)]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Call or email</p>
              <div className="mt-5 space-y-3 text-base text-slate-200">
                <p>Tel: 891-2764748</p>
                <p>Mobile: 98491 23546</p>
                <p>Email: info@kalahospitals.com</p>
              </div>
            </div>
          </div>

          <div id="booking">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
