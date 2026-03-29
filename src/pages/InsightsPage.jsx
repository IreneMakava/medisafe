import React from 'react';

export default function InsightsPage() {
  const types = [
    'Hospital visit photos',
    'Project site visits',
    'Field observations',
    'Market entry reflections',
    'Regulatory updates',
    'Sector commentary',
  ];

  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Insights
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">Insights &amp; Field Perspectives</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl text-justify">
            A visual and written record of Medisafe Suppliers Ltd&apos;s work across Tanzania&apos;s healthcare system.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-xs font-semibold text-slate-800 mb-4">Includes:</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {types.map((item) => (
            <div key={item} className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
