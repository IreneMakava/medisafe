import React from 'react';

export default function PartnersPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Partners
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Global Manufacturer Partnerships
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            We collaborate with reputable international manufacturers seeking compliant and sustainable access
            to the Tanzanian and East African markets.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="max-w-2xl mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">Why Partners Choose Medisafe</h2>
          <p className="text-xs text-slate-600">
            A trusted local partner with regulatory expertise, market knowledge, and reliable distribution capability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-xs text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Regulatory Expertise</h3>
            <p>
              Deep understanding of TMDA, MSD, and international regulatory frameworks to support compliant product
              registration and ongoing oversight.
            </p>
          </article>
          <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-xs text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Market Knowledge</h3>
            <p>
              Local insight into healthcare demand, procurement processes, and institutional needs across Tanzania
              and East Africa.
            </p>
          </article>
          <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-xs text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Reliable Distribution</h3>
            <p>
              Established warehousing, logistics partnerships, and institutional relationships ensuring products
              reach the right facilities reliably.
            </p>
          </article>
          <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-xs text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Professional Communication</h3>
            <p>
              Clear, timely, and professional communication with manufacturers, regulators, and institutional stakeholders.
            </p>
          </article>
          <article className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-xs text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Long-Term Partnership Approach</h3>
            <p>
              Focus on sustainable, long-term collaboration aligned with national health priorities and industrialisation agendas.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

