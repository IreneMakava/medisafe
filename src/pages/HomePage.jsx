import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroSystems from '../assets/img/picture no 1.jpeg';
import whoWeAreImage from '../assets/img/picture no 2.jpeg';
import MissionVisionValues from '../components/MissionVisionValues.jsx';
import { SECTORS } from '../data/sectors.js';

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
      <section className="relative text-left text-slate-50 overflow-hidden bg-sky-950 min-h-[420px] md:min-h-[480px] flex items-center">
        <img
          src={heroSystems}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[76%_center] opacity-[0.58] sm:object-right md:object-[70%_center] lg:object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 from-[30%] via-sky-900/55 via-[46%] to-sky-950/15" />
        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 w-full">
          <div className="max-w-3xl text-left">
            <p className="inline-flex items-center rounded-full bg-sky-800/80 text-sky-100 text-sm font-semibold px-4 py-2 mb-4 md:text-base md:px-5 md:py-2.5">
              Medisafe Suppliers Ltd
            </p>
            <h1 className="max-w-[40rem] text-2xl font-semibold tracking-tight text-pretty mb-4 md:text-3xl lg:text-[2rem]">
              Bridging Global Healthcare Innovation with Tanzania Healthcare System
            </h1>
            <p className="text-sm md:text-base text-sky-100/90 mb-4 max-w-2xl text-justify">
              Enabling global healthcare and medical technology companies to enter Tanzania with confidence through
              regulatory expertise, strategic partnerships, and systemaligned market access.
            </p>
            <p className="text-sm md:text-base text-sky-100/80 mb-6 max-w-2xl text-justify">
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
              <p className="text-sm md:text-base text-slate-700 text-justify">
                Medisafe Suppliers Ltd supports international healthcare and medical technology companies seeking to establish
                a sustainable presence in Tanzania. Our work is grounded in a deep understanding of the country&apos;s healthcare
                landscape, regulatory environment, and institutional dynamics.
              </p>
              <p className="text-sm md:text-base text-slate-700 text-justify">
                We operate at national, institutional, and clinical levels to ensure that global innovation aligns with
                Tanzania&apos;s priorities, operational realities, and longterm system needs.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl h-[150px] sm:h-[170px] md:h-[190px] lg:h-[210px] xl:h-[230px]">
              <img
                src={whoWeAreImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="public-sector" className="scroll-mt-20 py-12 bg-sky-50 border-y border-sky-100/80">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-3">Public sector</p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Strengthening national healthcare systems
          </h2>
          <div className="space-y-4 text-sm md:text-base text-slate-700 text-justify max-w-4xl">
            <p>
              Strengthening national healthcare systems is central to Medisafe Suppliers Ltd&apos;s mission. Given the critical
              role of the public sector in delivering healthcare across Tanzania, we are committed to supporting public
              institutions, national programmes, and systemlevel initiatives that aim to expand access to highquality care.
            </p>
            <p>
              Our work is grounded in a deep understanding of Tanzania&apos;s healthcare landscape. We engage directly with the
              healthcare system at national, institutional, and clinical levels, ensuring that our guidance is aligned with
              realworld priorities, operational realities, and the needs of patients and providers.
            </p>
            <p>
              Our team brings together expertise in regulatory pathways, institutional engagement, and clinical access. This
              allows us to provide realistic, actionable, and contextspecific guidance to international partners seeking to
              work within Tanzania&apos;s public healthcare ecosystem. We ensure that innovation aligns with national priorities,
              procurement frameworks, and the operational demands of public institutions.
            </p>
            <p>
              Through this work, we support the country&apos;s mission to improve patient outcomes, expand specialist services, and
              strengthen healthcare infrastructure, ensuring that advanced medical technologies ultimately benefit the
              citizens of Tanzania.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">What We Do</p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
            Clear Pathways for Market Entry and Sustainable Growth
          </h2>
          <p className="text-sm text-slate-700 mb-4 text-justify max-w-3xl">
            Medisafe Suppliers Ltd provides structured, compliant, and systemaligned pathways for international healthcare and
            medical technology companies entering Tanzania.
          </p>
          <p className="text-xs font-semibold text-slate-800 mb-3">Our capabilities include:</p>
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
              <div key={item} className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
          <Link to="/products-services" className="inline-flex mt-6 items-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-sky-700">
            Learn More About Our Services
          </Link>
        </div>
      </section>

      <section className="scroll-mt-20 py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <MissionVisionValues />
        </div>
      </section>

      <section id="sectors" className="scroll-mt-20 py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase">Sectors we support</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 text-justify md:text-[15px] md:leading-relaxed">
                Medisafe Suppliers Ltd works across a broad range of clinical, diagnostic, and healthcare technology domains.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sky-600">Our experience covers</p>
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
            className="mt-8 inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/25"
          >
            Explore Our Sectors
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
            <p className="text-sm text-slate-700 text-justify">
              Margaret leads Medisafe Suppliers Ltd&apos;s strategic advisory, regulatory navigation, and institutional engagement
              work. With deep experience across Tanzania&apos;s healthcare ecosystem and strong international exposure, she supports
              global healthcare and medical technology companies in establishing sustainable, compliant, and impactful market
              presence.
            </p>
          </div>
        </div>
      </section>

      <section id="insights" className="scroll-mt-20 py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">Insights</p>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">Insights &amp; Field Perspectives</h2>
          <p className="text-sm text-slate-700 mb-2 text-justify max-w-3xl">
            A visual and written record of Medisafe Suppliers Ltd&apos;s work across Tanzania&apos;s healthcare system.
          </p>
          <p className="text-xs font-semibold text-slate-800 mb-4">Includes:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm mb-6">
            {['Hospital visit photos', 'Project site visits', 'Field observations', 'Market entry reflections', 'Regulatory updates', 'Sector commentary'].map((item) => (
              <div key={item} className="bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 text-slate-800">
                {item}
              </div>
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
          <p className="text-sm text-sky-100/90 mb-2 max-w-2xl text-justify">
            Medisafe Suppliers Ltd supports global healthcare and medical technology companies seeking to enter or expand within Tanzania.
          </p>
          <p className="text-xs text-sky-200/90 mb-6">
            <span className="font-semibold text-sky-100">Location:</span> Dar es Salaam, Tanzania
          </p>
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
