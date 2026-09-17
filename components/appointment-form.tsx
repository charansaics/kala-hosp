'use client';

import { FormEvent, useState } from 'react';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Book an appointment</p>
        <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-900">Request a consultation</h3>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          Your appointment request has been received. Our team will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
            Full Name
            <input
              required
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
            Phone Number
            <input
              required
              type="tel"
              placeholder="Your phone"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
            Email Address
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
            Department
            <select
              required
              defaultValue=""
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            >
              <option value="" disabled>
                Select department
              </option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
              <option>Maternity</option>
              <option>Orthopedics</option>
              <option>General Medicine</option>
            </select>
          </label>

          <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
            Preferred Date
            <input
              required
              type="date"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
            Preferred Time
            <input
              required
              type="time"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
            Message
            <textarea
              rows={4}
              placeholder="Tell us about your health concern"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 px-5 py-3 text-base font-semibold text-white shadow-[0_16px_35px_rgba(14,165,233,0.2)] transition hover:from-sky-700 hover:to-cyan-700"
            >
              Submit Request
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
