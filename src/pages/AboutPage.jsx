import React from 'react';
import surgeonsCorridor from '../assets/img/surgeons-corridor.jpg';

export default function AboutPage() {
  return (
    <main className="pb-10">
      {/* Hero with background image */}
      <section className="relative border-b border-slate-100 text-slate-50 overflow-hidden">
        <img
          src={surgeonsCorridor}
          alt="Two surgeons walking through a hospital corridor"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/80 to-sky-900/40" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-sky-800/80 text-sky-100 text-[11px] font-semibold px-3 py-1 mb-3">
              About Us
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">
              Healthcare supply &amp; market entry partner for Tanzania and East Africa.
            </h1>
            <p className="text-sm md:text-base text-sky-100/90">
              Medisafe Suppliers Limited is a healthcare supply chain and market entry consultancy company based in Tanzania,
              specialising in essential medical consumables and compliant access to the Tanzanian and East African markets.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
        <div className="space-y-6 text-sm text-slate-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Company Overview</h2>
            <p className="mb-2">
              Medisafe Suppliers Limited is a healthcare supply chain and market entry consultancy company based in Tanzania.
              We specialize in the distribution of essential medical consumables and support international manufacturers
              seeking compliant and sustainable entry into the Tanzanian and East African markets.
            </p>
            <p>
              Our work is grounded in regulatory compliance, quality assurance, and long-term partnership building.
              We serve government institutions, private hospitals, NGOs, donor funded programs, and global manufacturers
              with reliable and compliant solutions.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">Mission</h3>
            <p>
              To ensure consistent access to safe, compliant, and high quality medical consumables that strengthen healthcare
              systems.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">Vision</h3>
            <p>To become East Africa’s most trusted and compliant healthcare supply and market entry partner.</p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Our Values</h3>
            <ul className="space-y-2 text-slate-700 text-xs">
              <li>
                <span className="font-semibold">Integrity</span> — Honesty, transparency, professionalism
              </li>
              <li>
                <span className="font-semibold">Compliance</span> — TMDA, MSD, ISO, CE, FDA adherence
              </li>
              <li>
                <span className="font-semibold">Reliability</span> — Consistent supply and service
              </li>
              <li>
                <span className="font-semibold">Professionalism</span> — High standards of execution
              </li>
              <li>
                <span className="font-semibold">Partnership</span> — Long term collaboration
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Founder’s Message</h3>
            <p className="text-xs text-slate-600 mb-3">
              “As Founder &amp; Managing Director, I bring hands on experience working with global healthcare companies,
              combined with deep knowledge of Tanzania’s regulatory and procurement landscape. My commitment is to ensure
              healthcare institutions have access to high quality, compliant, and reliable medical consumables that support
              patient safety and national health priorities.”
            </p>
            <p className="text-xs font-semibold text-slate-900">— Margaret Rwagasore</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

