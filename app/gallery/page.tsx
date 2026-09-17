import Link from "next/link";
import { Footer, Header } from "@/components/hospital-sections";
import { galleryImages } from "@/components/hospital-data";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#020b1a] text-white">
      <Header />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#020b1a_0%,_#081c2c_30%,_#0f172a_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Gallery</p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              A closer look at the Kala Hospitals experience.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              From patient care spaces to modern clinical infrastructure, our facilities are designed to feel reassuring, professional and calm.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.url} className="group overflow-hidden rounded-[30px] border border-slate-700 bg-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.25)]">
              <img
                src={image.url}
                alt={image.alt}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-cyan-500/20 bg-slate-900 p-8 shadow-[0_18px_45px_rgba(14,165,233,0.12)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Need care?</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Let our specialists help you feel confident again.</h2>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact#booking"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_16px_30px_rgba(34,211,238,0.2)]"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
