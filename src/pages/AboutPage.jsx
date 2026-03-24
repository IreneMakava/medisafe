import React from 'react';
import whoWeAreImage from '../assets/img/picture no 2.jpeg';

export default function AboutPage() {
  return (
    <main className="pb-10">
      <section className="relative border-b border-slate-100 text-slate-50 overflow-hidden min-h-[280px] md:min-h-[320px] flex items-center">
        <img
          src={whoWeAreImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/92 via-sky-900/78 to-sky-900/50" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-sky-800/80 text-sky-100 text-[11px] font-semibold px-3 py-1 mb-3">
              Who We Are
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Strategic partner for healthcare and MedTech in Tanzania
            </h1>
            <p className="text-sm md:text-base text-sky-100/90">
              Medisafe Suppliers Ltd supports international companies with regulatory pathways through TMDA and NIMR,
              institutional engagement, and market entry aligned with national system priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="space-y-4 text-sm text-slate-700 max-w-3xl">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">Company overview</h2>
          <p>
            Medisafe Suppliers Ltd supports international healthcare and medical technology companies seeking to establish
            a sustainable presence in Tanzania. Our work is grounded in a deep understanding of the country&apos;s healthcare
            landscape, regulatory environment, and institutional dynamics.
          </p>
          <p>
            We operate at national, institutional, and clinical levels to ensure that global innovation aligns with
            Tanzania&apos;s priorities, operational realities, and long-term system needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Mission</h3>
            <p className="text-xs text-slate-600">
              To ensure consistent access to safe, compliant, and high-quality medical consumables that strengthen healthcare systems.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Vision</h3>
            <p className="text-xs text-slate-600">
              To become East Africa&apos;s most trusted and compliant healthcare supply and market entry partner.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 md:col-span-1">
            <h3 className="font-semibold text-slate-900 mb-3">Our values</h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li><span className="font-semibold text-slate-800">Integrity</span> — Honesty, transparency, professionalism</li>
              <li><span className="font-semibold text-slate-800">Compliance</span> — TMDA, MSD, ISO, CE, FDA adherence</li>
              <li><span className="font-semibold text-slate-800">Reliability</span> — Consistent supply and service</li>
              <li><span className="font-semibold text-slate-800">Professionalism</span> — High standards of execution</li>
              <li><span className="font-semibold text-slate-800">Partnership</span> — Long-term collaboration</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
