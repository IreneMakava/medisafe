import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase">Team</p>
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Leadership</h1>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl text-justify">
            Professional, minimal, leadership focused advisory for healthcare and MedTech partners in Tanzania.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="max-w-2xl bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
          <p className="font-semibold text-slate-900 text-lg">Margaret Rwagasore</p>
          <p className="text-sm text-slate-600 mb-4">Founder &amp; Managing Director, Medisafe Suppliers Ltd</p>
          <p className="text-sm text-slate-700 text-justify leading-relaxed">
            Margaret leads Medisafe Suppliers Ltd&apos;s strategic advisory, regulatory navigation, and institutional engagement
            work. With deep experience across Tanzania&apos;s healthcare ecosystem and strong international exposure, she supports
            global healthcare and medical technology companies in establishing sustainable, compliant, and impactful market
            presence.
          </p>
        </div>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-sky-700"
        >
          Partner with us
        </Link>
      </section>
    </main>
  );
}
