import React from 'react';
import { Link } from 'react-router-dom';
import heroSurgery from '../images/hero-surgery.jpg';
import clinicianTablet from '../images/clinician-tablet.jpg';
import supportElderly from '../images/support-elderly.jpg';
import pharmacistShelves from '../images/pharmacist-shelves.jpg';
import ctaWheelchair from '../images/cta-wheelchair.jpg';

export default function HomePage() {
  return (
    <>
      <section className="relative text-slate-50 overflow-hidden">
        <img
          src={heroSurgery}
          alt="Surgical team in an operating room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/80 to-sky-900/40" />
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
          <div className="max-w-xl">
            <p className="inline-flex items-center rounded-full bg-sky-800/80 text-sky-100 text-xs font-semibold px-3 py-1 mb-4">
              Medisafe Suppliers Limited
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Reliable, compliant healthcare supply for Tanzania &amp; East Africa.
            </h1>
            <p className="text-sm md:text-base text-sky-100/90 mb-6">
              High quality medical consumables, TMDA-aligned regulatory expertise, and long-term partnerships with
              hospitals, NGOs, and government institutions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-white text-sky-800 px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <Link
                to="/products-services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-100 hover:text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-200/60 bg-sky-900/30">
                  <span className="h-2.5 w-2.5 border-2 border-sky-100 border-l-transparent rounded-full inline-block" />
                </span>
                <span>See how we work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip under hero */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 mt-0 pb-6">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 px-6 py-5 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.6fr)_auto] items-center text-xs md:text-sm">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-lg">
                @
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Email</p>
                <p className="text-slate-800 text-xs md:text-sm">info@medisafesuppliers.co.tz</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-700">
                <span className="h-4 w-4 rounded-full border border-sky-600" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Location</p>
                <p className="text-slate-800 text-xs md:text-sm">Dar es Salaam, Tanzania</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-base">
                ⏰
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">Hours</p>
                <p className="text-slate-800 text-xs md:text-sm">Mon–Fri · 8:00–17:00</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2 text-xs font-semibold shadow-md hover:bg-sky-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-sky-50 via-sky-50 to-white rounded-3xl shadow-sm border border-slate-100 px-6 md:px-10 py-8 grid md:grid-cols-[minmax(0,2.4fr)_minmax(0,2.2fr)] gap-8 items-center">
            {/* Text left, similar to template */}
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-1">About Us</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3 leading-snug">
                Medisafe is a team of experienced
                <br className="hidden sm:block" /> healthcare supply professionals.
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                Medisafe Suppliers Limited is a Tanzanian healthcare supply company dedicated to providing safe, compliant,
                and high quality medical consumables to hospitals, clinics, laboratories, NGOs, and government institutions.
              </p>
              <p className="text-sm text-slate-600 mb-4">
                We combine TMDA regulatory expertise, strong global manufacturer partnerships, and reliable distribution
                to support improved healthcare outcomes across Tanzania and East Africa.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-700">
                <li>TMDA regulatory expertise</li>
                <li>Trusted global manufacturer partnerships</li>
                <li>Consistent, high quality products</li>
                <li>Reliable institutional supply</li>
                <li>Founder experience with global healthcare companies</li>
                <li>Ethical, transparent operations</li>
              </ul>
            </div>

            {/* Image right, aligned like template */}
            <div className="relative h-56 md:h-72">
              <div className="absolute inset-y-0 right-0 w-full md:w-[90%] rounded-3xl overflow-hidden shadow-md">
                <img
                  src={clinicianTablet}
                  alt="Clinician using a tablet in a hospital corridor"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, vision, values */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-[11px] font-semibold tracking-wide text-sky-600 mb-1">Our Direction</p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-5 py-6 text-center">
              <p className="font-semibold text-slate-900 mb-2">Mission</p>
              <p className="text-xs text-slate-600">
                To ensure consistent access to safe, compliant, and high quality medical consumables that strengthen
                healthcare systems.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-5 py-6 text-center">
              <p className="font-semibold text-slate-900 mb-2">Vision</p>
              <p className="text-xs text-slate-600">
                To become East Africa’s most trusted and compliant healthcare supply and market entry partner.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 px-5 py-6 text-center">
              <p className="font-semibold text-slate-900 mb-2">Values</p>
              <p className="text-xs text-slate-600">
                Integrity, compliance, reliability, professionalism, and long-term partnership with institutions and
                manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>
    {/* Mission, vision, values */}
      {/* Our services (Products & Services) */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-[11px] font-semibold tracking-wide text-sky-600 mb-1">PRODUCTS &amp; SERVICES</p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Medical Consumables &amp; Supply Solutions</h2>
            <p className="text-sm text-slate-600">
              Essential medical consumables sourced from certified international manufacturers, supported by regulatory and
              market entry services.
            </p>
          </div>

          <div className="grid md:grid-cols-[minmax(0,2.3fr)_minmax(0,2.7fr)] gap-6 items-center">
            {/* Image left */}
            <img
              src={pharmacistShelves}
              alt="Pharmacist inspecting medication shelves"
              className="w-full rounded-2xl object-cover shadow-md"
            />

            {/* Details right */}
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">Medical consumables</h3>
                <p className="text-xs text-slate-600">
                  Examination and surgical gloves, PPE, diagnostic consumables, wound care, and other essential supplies.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">Regulatory &amp; market entry</h3>
                <p className="text-xs text-slate-600">
                  TMDA licensing and product registration, documentation support, and institutional engagement (MSD, hospitals, NGOs).
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 sm:col-span-2">
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">Supply chain &amp; distribution</h3>
                <p className="text-xs text-slate-600">
                  Direct global sourcing, warehousing in Dar es Salaam, 3PL partnerships, and batch documentation verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Mid-page CTA card */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-sky-100 via-sky-100 to-sky-200 
          rounded-3xl shadow-sm px-6 md:px-10 py-8 
          grid md:grid-cols-[minmax(0,2.6fr)_minmax(0,2.2fr)] 
          gap-8 items-center relative overflow-visible">

      {/* LEFT CONTENT */}
        <div className="max-w-md">
          <p className="text-[11px] font-semibold tracking-wide text-sky-700 uppercase mb-1">
            Institutional supply &amp; partnerships
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            Don’t let your healthcare supply chain fall behind.
          </h2>
          <p className="text-sm text-slate-600 mb-4">
          Schedule a conversation with Medisafe to review your medical consumables needs, regulatory requirements,
          and long-term supply strategy.
          </p>
            <Link
             to="/contact"
             className="inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-sky-700"
          >
            Talk to Medisafe
            </Link>
        </div>

      {/* EMPTY RIGHT SIDE (prevents stretching) */}
        <div></div>

      {/* 🔥 FLOATING IMAGE (OUTSIDE FLOW) */}
        <div className="hidden md:block absolute right-[-80px] top-1/2 -translate-y-1/2">
        <div className="h-[380px] w-[380px] rounded-full border-[6px] border-white overflow-hidden shadow-xl">
          <img
            src={supportElderly}
            alt="Healthcare worker supporting an elderly patient"
            className="h-full w-full object-cover"
          />
        </div>
        </div>

        </div>
        </div>
      </section>

      {/* Corporates & investors */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
          <div className="space-y-4 text-sm text-slate-700">
            <p className="text-[11px] font-semibold tracking-wide text-sky-600">CORPORATES &amp; INVESTORS</p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Strategic support for healthcare corporates and investors
            </h2>
            <p>
              Independent, practical, and actionable support for leadership teams entering or expanding in the Tanzanian
              healthcare market.
            </p>
            <ul className="list-disc list-inside text-xs space-y-1">
              <li>Market entry and localisation strategies</li>
              <li>Regulatory and institutional engagement pathways</li>
              <li>Pricing, procurement, and portfolio alignment</li>
              <li>Commercial and regulatory due diligence for investments</li>
            </ul>
          </div>

          <div className="bg-sky-50 rounded-2xl border border-sky-100 p-5 text-xs text-slate-800">
            <p className="font-semibold text-slate-900 mb-2">Investor-focused perspective</p>
            <p className="mb-2">
              We align investor strategies with national health priorities, regulatory frameworks, and industrialisation
              agendas to support sustainable, long-term value creation.
            </p>
            <p className="text-slate-600">
              Support spans feasibility, early-stage planning, operational readiness, and joint venture or technology
              transfer initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 bg-sky-800 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,2.4fr)_minmax(0,2.2fr)] gap-8 items-center">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold tracking-wide text-sky-200">PARTNER WITH MEDISAFE</p>
            <h2 className="text-xl md:text-2xl font-semibold">
              Partner with a supplier committed to quality, compliance, and system strengthening.
            </h2>
            <p className="text-xs md:text-sm text-sky-100/90">
              Long-term partnerships with hospitals, NGOs, government institutions, and global manufacturers to strengthen
              healthcare systems across Tanzania and East Africa.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white text-sky-800 px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-slate-100"
            >
              Contact Medisafe
            </Link>
          </div>
          <img
            src={ctaWheelchair}
            alt="Healthcare worker with elderly man in wheelchair"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Quality & compliance */}
      <section className="py-12 bg-sky-800 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-sky-300 mb-2">QUALITY &amp; COMPLIANCE</p>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Built on certified manufacturers and TMDA-aligned processes.
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-slate-100/90">
              <li>Certified global manufacturers with ISO, CE, and FDA standards</li>
              <li>Batch documentation, verification, and supplier vetting</li>
              <li>TMDA licensing, MSD procurement alignment, and import compliance</li>
              <li>Transparent reporting to support institutional and donor requirements</li>
            </ul>
          </div>

          <div className="bg-slate-800/70 rounded-2xl border border-slate-700 p-5 text-xs text-slate-200">
            <p className="font-semibold mb-2">Our commitment</p>
            <p className="mb-2">
              We deliver safe, compliant, and high quality medical consumables that support effective healthcare delivery
              and national health priorities.
            </p>
            <p className="text-slate-300">
              Quality and compliance are embedded at every stage – from manufacturer selection and documentation review
              through to warehousing, distribution, and institutional delivery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

