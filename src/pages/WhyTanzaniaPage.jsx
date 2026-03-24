import React from 'react';

export default function WhyTanzaniaPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Why Tanzania
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            A Growing Market with Expanding Healthcare Needs
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Medisafe Suppliers Ltd helps international healthcare and medical technology companies understand Tanzania&apos;s
            context — opportunities, system priorities, and how to engage responsibly.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-sm text-slate-700 mb-4">We support partners in navigating:</p>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-2 max-w-2xl">
          <li>Market opportunities</li>
          <li>System priorities</li>
          <li>Procurement pathways</li>
          <li>Regulatory expectations</li>
          <li>Institutional structures</li>
          <li>Clinical needs and gaps</li>
        </ul>
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 border border-slate-200 h-48 md:h-64" aria-hidden />
      </section>
    </main>
  );
}
