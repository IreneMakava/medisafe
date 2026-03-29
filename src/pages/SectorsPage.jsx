import React from 'react';
import { Link } from 'react-router-dom';
import { SECTORS } from '../data/sectors.js';

export default function SectorsPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase">Sectors we support</p>
          <h1 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Clinical and healthcare technology domains
          </h1>
          <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-slate-700 text-justify max-w-3xl">
            Medisafe Suppliers Ltd works across a broad range of clinical, diagnostic, and healthcare technology domains.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sky-600">Our experience covers</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SECTORS.map((sector) => (
            <div
              key={sector}
              className="group relative flex min-h-[6.5rem] flex-col justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:content-[''] before:bg-gradient-to-r before:from-sky-500 before:to-sky-400 before:opacity-90 group-hover:before:opacity-100 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg hover:shadow-slate-900/[0.06]"
            >
              <p className="text-sm font-medium leading-snug text-slate-800">{sector}</p>
            </div>
          ))}
        </div>

        <Link
          to="/products-services"
          className="mt-10 inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-sky-700"
        >
          Learn more about our services
        </Link>
      </section>
    </main>
  );
}
