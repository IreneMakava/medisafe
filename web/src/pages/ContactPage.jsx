import React from 'react';

export default function ContactPage() {
  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Contact Us
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Get in Touch with Medisafe Suppliers Limited
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            We welcome enquiries from healthcare providers, NGOs, government institutions, manufacturers, and investors.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">Contact Details</h2>
            <p className="mb-3">
              <span className="block text-xs font-semibold text-slate-900">Email</span>
              <a href="mailto:info@medisafesuppliers.co.tz" className="text-sm text-sky-700">
                info@medisafesuppliers.co.tz
              </a>
            </p>
            <p className="mb-3">
              <span className="block text-xs font-semibold text-slate-900">Location</span>
              Dar es Salaam, Tanzania
            </p>
            <p>
              <span className="block text-xs font-semibold text-slate-900">Business Hours</span>
              Monday–Friday | 8:00–17:00
            </p>
          </div>
        </div>

        <aside>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Send Us a Message</h3>
            <p className="text-xs text-slate-600 mb-2">
              Use the contact details provided to share product enquiries, partnership opportunities, or investment-related
              questions.
            </p>
            <p className="text-[11px] text-slate-500">
              Our team will respond as soon as possible within business hours.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

