import React from 'react';

export default function CorporatesInvestorsPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Corporates &amp; Investors
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Strategic Support for Healthcare Corporates &amp; Investors
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Independent, practical, and actionable support for healthcare corporates and investors entering and operating
            in the Tanzanian market.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Support for Corporates &amp; Operators</h2>
            <p className="mb-2">
              Whether an earlystage healthcare company or a global multinational, Medisafe Suppliers Limited provides
              independent, practical, and actionable support to corporate leadership teams entering the Tanzanian market.
            </p>
            <p className="mb-2">We work alongside executive and operational teams to develop:</p>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>Market entry and localisation strategies</li>
              <li>Regulatory and institutional engagement pathways</li>
              <li>Product lifecycle and portfolio strategy</li>
              <li>Pricing and procurement alignment</li>
              <li>Stakeholder and government engagement</li>
            </ul>
          </div>

          <p className="text-xs text-slate-600">
            Our approach combines regulatory insight, market intelligence, and operational execution to reduce risk and
            accelerate compliant market access.
          </p>
        </div>

        <aside>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Support for Investors</h3>
            <p className="text-xs text-slate-700 mb-3">
              Medisafe Suppliers Limited supports investors across the full lifecycle of healthcare investments in Tanzania.
            </p>
            <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 mb-3">
              <li>Commercial and regulatory due diligence</li>
              <li>Market feasibility and demand assessment</li>
              <li>Earlystage market entry planning</li>
              <li>Operational readiness and localisation strategy</li>
              <li>Support for joint ventures, manufacturing, and technology transfer</li>
            </ul>
            <p className="text-[11px] text-slate-500">
              We align investor strategies with national health priorities, regulatory frameworks, and government
              industrialisation agendas to support sustainable, longterm value creation.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

