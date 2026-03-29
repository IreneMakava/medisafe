import React from 'react';

export default function ProductsServicesPage() {
  const capabilities = [
    'Market Entry Strategy',
    'Regulatory Navigation (TMDA)',
    'Ethics & Research Approvals (NIMR)',
    'Institutional Engagement',
    'Clinical Access & Specialist Engagement',
    'Distributor Mapping (If required)',
    'Local Representation',
  ];

  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            What We Do
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Clear Pathways for Market Entry and Sustainable Growth
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl text-justify">
            Medisafe Suppliers Ltd provides structured, compliant, and systemaligned pathways for international healthcare and
            medical technology companies entering Tanzania.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-10 items-start">
        <div className="rounded-3xl bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 border border-slate-200 min-h-[200px] md:min-h-[280px]" aria-hidden />
        <div>
          <p className="text-xs font-semibold text-slate-800 mb-3">Our capabilities include:</p>
          <ul className="space-y-3 text-sm text-slate-800">
            {capabilities.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-sky-600 font-semibold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
