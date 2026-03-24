import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroSystems from '../assets/img/picture no 1.jpeg';
import whoWeAreImage from '../assets/img/picture no 2.jpeg';
import MissionVisionValues from '../components/MissionVisionValues.jsx';

const SECTORS = [
  'Oncology',
  'Diagnostics',
  'Medical Devices',
  'Digital Health',
  'Surgical Technologies',
  'Critical Care',
  'Pharmaceuticals',
  'Dentistry',
  'Wound Care',
  'Healthcare Manufacturing & Local Production (Investment Capability)',
];

export default function HomePage() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location]);

  return (
    <>
      <section className="relative text-slate-50 overflow-hidden bg-sky-950 min-h-[420px] md:min-h-[480px] flex items-center">
        <img
          src={heroSystems}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/85 to-sky-900/55" />
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 w-full">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-sky-800/80 text-sky-100 text-xs font-semibold px-3 py-1 mb-4">
              Medisafe Suppliers Ltd
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Bridging Global Healthcare Innovation with Tanzania Healthcare System
            </h1>
            <p className="text-sm md:text-lg text-sky-100/90 mb-4">
              Enabling global healthcare and medical technology companies to enter Tanzania with confidence through
              regulatory expertise, strategic partnerships, and system-aligned market access.
            </p>
            <p className="text-sm md:text-base text-sky-100/80 mb-6 max-w-2xl">
              Medisafe Suppliers Ltd is a trusted partner for international healthcare and medical technology companies
              seeking to navigate Tanzania&apos;s evolving healthcare ecosystem. We provide clear regulatory pathways through
              TMDA and NIMR, alongside institutional engagement and market entry strategies that ensure innovation is
              introduced responsibly, compliantly, and with measurable impact.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products-services" className="inline-flex items-center rounded-full bg-white text-sky-800 px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-slate-100">
                Explore What We Do
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-sky-100/40 bg-sky-800/20 text-sky-100 px-5 py-2.5 text-xs font-semibold hover:bg-sky-800/40">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-are" className="scroll-mt-20 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase">Who We Are</p>

          <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 items-start">
            <div className="space-y-4">
              <p className="text-sm md:text-base text-slate-700">
                Medisafe Suppliers Ltd supports international healthcare and medical technology companies seeking to establish
                a sustainable presence in Tanzania. Our work is grounded in a deep understanding of the country&apos;s healthcare
                landscape, regulatory environment, and institutional dynamics.
              </p>
              <p className="text-sm md:text-base text-slate-700">
                We operate at national, institutional, and clinical levels to ensure that global innovation aligns with
                Tanzania&apos;s priorities, operational realities, and long-term system needs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-[4/3] md:aspect-auto md:min-h-[220px]">
              <img
                src={whoWeAreImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <MissionVisionValues />
        </div>
      </section>

      <section className="py-12 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">What We Do</p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">Clear Pathways for Market Entry and Sustainable Growth</h2>
          <p className="text-sm text-slate-700 mb-5">
            Medisafe Suppliers Ltd provides structured, compliant, and system-aligned pathways for international
            healthcare and medical technology companies entering Tanzania.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {[
              'Market Entry Strategy',
              'Regulatory Navigation (TMDA)',
              'Ethics & Research Approvals (NIMR)',
              'Institutional Engagement',
              'Clinical Access & Specialist Engagement',
              'Distributor Mapping (If required)',
              'Local Representation',
            ].map((item) => (
              <div key={item} className="bg-white rounded-xl border border-slate-100 px-4 py-3 text-slate-800 shadow-sm">{item}</div>
            ))}
          </div>
          <Link to="/products-services" className="inline-flex mt-6 items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-sky-700">
            Learn More About Our Services
          </Link>
        </div>
      </section>

      <section id="sectors" className="scroll-mt-20 py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase">Sectors we support</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Clinical and technology domains
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 text-justify md:text-[15px] md:leading-relaxed">
                Medisafe Suppliers Ltd works across high-level clinical, diagnostic, and healthcare technology areas — strategic
                coverage, not a product catalogue.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block md:mb-2" aria-hidden />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SECTORS.map((sector) => (
              <div
                key={sector}
                className="group relative flex min-h-[6.5rem] flex-col justify-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-1 before:content-[''] before:bg-gradient-to-r before:from-sky-500 before:to-sky-400 before:opacity-90 before:transition-opacity group-hover:before:opacity-100 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-lg hover:shadow-slate-900/[0.06]"
              >
                <p className="text-sm font-medium leading-snug text-slate-800">{sector}</p>
              </div>
            ))}
          </div>

          <Link
            to="/products-services"
            className="mt-10 inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/25"
          >
            Explore our sectors
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,2.5fr)_minmax(0,2fr)] gap-8 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">Why Tanzania</p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">A Growing Market with Expanding Healthcare Needs</h2>
            <p className="text-sm text-slate-700 mb-3">
              Medisafe Suppliers Ltd helps international companies understand:
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 mb-4">
              <li>Market opportunities</li>
              <li>System priorities</li>
              <li>Procurement pathways</li>
              <li>Regulatory expectations</li>
              <li>Institutional structures</li>
              <li>Clinical needs and gaps</li>
            </ul>
            <Link to="/why-tanzania" className="inline-flex items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-sky-700">
              Why Tanzania
            </Link>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-100 via-sky-50 to-slate-100 border border-slate-200 h-56 md:h-64" aria-hidden />
        </div>
      </section>

      <section id="team" className="scroll-mt-20 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">Team</p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">Leadership</h2>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <p className="font-semibold text-slate-900">Margaret Rwagasore</p>
            <p className="text-sm text-slate-600 mb-2">Founder &amp; Managing Director, Medisafe Suppliers Ltd</p>
            <p className="text-sm text-slate-700">
              Margaret leads Medisafe Suppliers Ltd&apos;s strategic advisory, regulatory navigation, and institutional engagement work. With deep experience across Tanzania&apos;s healthcare ecosystem and strong international exposure, she supports global healthcare and medical technology companies in establishing sustainable, compliant, and impactful market presence.
            </p>
          </div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-20 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">Insights</p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Insights &amp; Field Perspectives</h2>
          <p className="text-sm text-slate-700 mb-4">A visual and written record of Medisafe Suppliers Ltd&apos;s work across Tanzania&apos;s healthcare system.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm mb-6">
            {['Hospital visit photos', 'Project site visits', 'Field observations', 'Market entry reflections', 'Regulatory updates', 'Sector commentary'].map((item) => (
              <div key={item} className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 text-slate-800">{item}</div>
            ))}
          </div>
          <Link to="/insights" className="inline-flex items-center rounded-full border border-sky-200 text-sky-700 bg-sky-50 px-5 py-2.5 text-xs font-semibold hover:bg-sky-100">
            View insights
          </Link>
        </div>
      </section>

      <section className="py-12 bg-sky-800 text-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-200 mb-2">Contact</p>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Start a Conversation</h2>
          <p className="text-sm text-sky-100/90 mb-2 max-w-2xl">
            Medisafe Suppliers Ltd supports global healthcare and medical technology companies seeking to enter or expand within Tanzania.
          </p>
          <p className="text-xs text-sky-200/90 mb-6">Dar es Salaam, Tanzania</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-sky-800 px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-slate-100"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
