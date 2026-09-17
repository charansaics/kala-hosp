"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  departments,
  doctors,
  galleryImages,
  highlights,
  services,
  specialisationHighlights,
  stats,
  testimonials,
} from "@/components/hospital-data";
import { MedicalScene } from "@/components/medical-scene";

export {
  departments,
  doctors,
  galleryImages,
  highlights,
  services,
  specialisationHighlights,
  stats,
  testimonials,
};

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 text-lg font-black text-white shadow-lg shadow-cyan-500/30">
              K
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-[0.2em] text-white">KALA</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                Hospitals
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition ${isActive ? "font-semibold text-cyan-300" : "hover:text-cyan-200"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:+918912764748"
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-200"
            >
              Call Now
            </a>
            <Link
              href="/contact#booking"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-sky-400"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 shadow-sm transition hover:border-cyan-400/50 hover:text-cyan-200 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-[26px] border border-slate-700 bg-slate-900 p-3 shadow-[0_18px_35px_rgba(15,23,42,0.3)] md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-200"
                        : "text-slate-200 hover:bg-slate-800 hover:text-cyan-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <a
                  href="tel:+918912764748"
                  className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-slate-100"
                >
                  Call Now
                </a>
                <Link
                  href="/contact#booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-3 text-center text-sm font-semibold text-slate-950"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_30%),linear-gradient(135deg,_#020b1a_0%,_#081c2c_30%,_#0f172a_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_80%_15%,rgba(96,165,250,0.15),transparent_22%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            Trusted care in Visakhapatnam
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Compassionate care. <span className="text-cyan-300">Clinical excellence.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
            Kala Hospitals provides latest internationally recognised medical care with a human approach, combining specialist treatment,
            technology-led diagnostics and patient-friendly support services across every stage of care.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact#booking"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3 text-center text-base font-semibold text-slate-950 shadow-[0_18px_30px_rgba(34,211,238,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_35px_rgba(34,211,238,0.35)]"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+918912764748"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-center text-base font-semibold text-slate-100 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-200"
            >
              Emergency Contact
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-cyan-400/20 bg-white/5 p-4 shadow-[0_10px_25px_rgba(15,23,42,0.16)] backdrop-blur-sm">
                <div className="text-3xl font-black tracking-[-0.04em] text-cyan-300">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/40 blur-3xl" />
          <div className="absolute -right-5 bottom-8 h-28 w-28 rounded-full bg-sky-400/40 blur-3xl" />
          <div className="fade-in-up relative z-10">
            <MedicalScene />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_18px_60px_rgba(15,23,42,0.07)]">
          <img
            src="https://kalahospitals.com/images/face.png"
            alt="Kala Hospitals leadership and patient care"
            className="h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">About us</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">
            A trusted destination for advanced healthcare in Visakhapatnam.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Kala Hospitals is engaged in providing the latest in internationally recognised medical care to patients with a variety of ailments and medical conditions. Our hospital combines modern facilities, a multidisciplinary care model and a human approach to healing.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We emphasize early detection, timely intervention and a comfortable treatment environment, supported by technology, skilled experts and patient-friendly services such as laboratory care, pharmacy support and cafeteria facilities.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_25px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(15,23,42,0.06)]">
                <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">✓</div>
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Our services</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Specialised care across the patient journey.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-500/10 text-3xl shadow-inner shadow-cyan-500/20">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpecialitiesSection() {
  return (
    <section id="specialities" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Specialisations</p>
        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Expertise across key medical disciplines</h2>
      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {specialisationHighlights.map((item) => (
          <div key={item} className="rounded-[24px] border border-sky-100 bg-sky-50 p-5 text-left shadow-[0_12px_24px_rgba(14,116,144,0.05)]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-sky-700 shadow-sm">✦</div>
            <p className="text-sm font-medium text-slate-700">{item}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {departments.map((department, index) => (
          <div
            key={department}
            className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_28px_rgba(15,23,42,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-lg font-bold text-sky-700">
              {index + 1}
            </div>
            <p className="mt-5 text-base font-bold text-slate-800">{department}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DoctorsSection() {
  return (
    <section id="doctors" className="bg-gradient-to-b from-sky-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Medical team</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Meet our senior specialists</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.09)]">
              <img src={doctor.image} alt={doctor.name} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-sky-700">{doctor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[34px] bg-slate-900 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Why patients choose us</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">A hospital experience designed around comfort, trust and recovery.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            We focus on early detection, timely intervention and a supportive environment where families feel informed, cared for and confident throughout treatment.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
            <div className="text-3xl font-black text-cyan-300">24/7</div>
            <p className="mt-2 text-sm text-slate-300">Round-the-clock emergency support and trauma response</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
            <div className="text-3xl font-black text-cyan-300">A/C</div>
            <p className="mt-2 text-sm text-slate-300">Comfortable, centrally air-conditioned infrastructure</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
            <div className="text-3xl font-black text-cyan-300">Labs</div>
            <p className="mt-2 text-sm text-slate-300">Computerised diagnostics, pathology and precision reporting</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
            <div className="text-3xl font-black text-cyan-300">Care</div>
            <p className="mt-2 text-sm text-slate-300">Pharmacy, cafeteria and patient-friendly facilities under one roof</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Patient stories</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl">Families trust our care</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(15,23,42,0.08)]">
              <div className="text-4xl text-sky-700">“</div>
              <p className="mt-2 text-base leading-8 text-slate-600">{item.quote}</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-slate-800">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[34px] border border-sky-100 bg-gradient-to-r from-sky-700 via-cyan-700 to-sky-800 p-8 text-white shadow-[0_25px_80px_rgba(14,116,144,0.25)] lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">Contact us</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Take the first step toward better health.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-sky-50">
              Reach out to our care team for appointments, consultations, emergency support and specialist guidance.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.14)] backdrop-blur-sm">
            <div className="space-y-4 text-sm text-sky-50">
              <p className="font-semibold text-white">Kala Hospitals Pvt Ltd</p>
              <p>Dr. P.V. Ramana Murthy</p>
              <p>Door No 47-1-104, 6th Lane, Dwaraka Nagar, Visakhapatnam</p>
              <p>Andhra Pradesh – 500 016</p>
              <div className="pt-2">
                <p>Tel: 891-2764748</p>
                <p>Mobile: 98491 23546</p>
                <p>Email: info@kalahospitals.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2023 - 2024 Kala Hospitals Visakhapatnam</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/about" className="transition hover:text-cyan-300">About</Link>
          <Link href="/services" className="transition hover:text-cyan-300">Services</Link>
          <Link href="/gallery" className="transition hover:text-cyan-300">Gallery</Link>
          <Link href="/contact" className="transition hover:text-cyan-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
