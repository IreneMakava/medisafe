import React from 'react';
import clinicianTablet from '../images/clinician-tablet.jpg';

export default function QualityCompliancePage() {
  return (
    <main className="pb-10">
      {/* Hero with background image */}
      <section className="relative border-b border-slate-100 text-slate-50 overflow-hidden min-h-[260px] md:min-h-[320px]">
        <img
          src={clinicianTablet}
          alt="Clinician using a tablet in a hospital corridor"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/80 via-sky-900/60 to-sky-900/30" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 min-h-[220px] flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-sky-800/80 text-sky-100 text-[11px] font-semibold px-3 py-1 mb-3">
              Quality &amp; Compliance
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              Assuring safe, compliant, and high quality supply.
            </h1>
            <p className="text-sm md:text-base text-sky-100/90">
              Our operations are built on stringent quality standards, regulatory alignment, and transparent documentation.
            </p>
          </div>
        </div>
      </section>

    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Our Quality Standards</h2>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>Certified global manufacturers</li>
              <li>ISO, CE, FDA compliance</li>
              <li>Batch documentation and verification</li>
              <li>Supplier vetting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Regulatory Compliance</h2>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>TMDA licensing and registration</li>
              <li>MSD procurement alignment</li>
              <li>Importation compliance</li>
              <li>Transparent reporting</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Our Commitment</h3>
            <p className="text-xs text-slate-700 mb-3">
              We deliver safe, compliant, and high quality medical consumables that support effective healthcare delivery
              and national health priorities.
            </p>
            <p className="text-[11px] text-slate-500 mb-3">
              Quality and compliance are embedded at every stage – from manufacturer selection and documentation review
              through to warehousing, distribution, and institutional delivery.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Digital Documentation &amp; Verification</h3>
            <p className="text-xs text-slate-700 mb-3">
              Digital workflows for batch documentation, regulatory submissions, and institutional reporting.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

