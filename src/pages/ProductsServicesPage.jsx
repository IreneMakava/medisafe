import React from 'react';
import pharmacistShelves from '../assets/img/pharmacist-shelves.jpg';

export default function ProductsServicesPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Products &amp; Services
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Medical Consumables &amp; Healthcare Supply Solutions
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Essential, compliant, and high quality medical consumables combined with regulatory, market entry,
            and distribution services.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,2.4fr)_minmax(0,2.4fr)] gap-8 items-center">
        {/* Image left */}
        <div className="h-56 md:h-72 rounded-3xl overflow-hidden shadow-md">
          <img
            src={pharmacistShelves}
            alt="Pharmacist inspecting medication shelves"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details right */}
        <div className="space-y-6 text-sm text-slate-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Medical Consumables</h2>
            <p className="mb-2">
              All products are sourced from certified international manufacturers and comply with ISO, CE, and FDA standards.
            </p>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>Powder free latex examination gloves</li>
              <li>Sterile surgical latex gloves</li>
              <li>PPE</li>
              <li>Diagnostic consumables</li>
              <li>Wound care products</li>
              <li>Additional essential medical supplies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Regulatory &amp; Market Entry Services</h2>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>TMDA licensing and product registration</li>
              <li>Regulatory documentation support</li>
              <li>Market entry advisory</li>
              <li>Institutional engagement (MSD, hospitals, NGOs)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Supply Chain &amp; Distribution</h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li>Direct global sourcing</li>
              <li>Warehousing in Dar es Salaam</li>
              <li>Third-party logistics partnerships</li>
              <li>Batch documentation and quality verification</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

