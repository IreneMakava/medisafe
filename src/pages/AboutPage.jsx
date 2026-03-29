import React from 'react';
import whoWeAreImage from '../assets/img/picture no 2.jpeg';
import MissionVisionValues from '../components/MissionVisionValues.jsx';

export default function AboutPage() {
  return (
    <main className="pb-10">
      <section className="relative border-b border-slate-100 overflow-hidden min-h-[280px] md:min-h-[320px] flex items-center text-left">
        <img
          src={whoWeAreImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/93 via-sky-50/85 to-sky-100/45" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-sky-600 text-white text-[11px] font-semibold px-3 py-1 mb-3 shadow-sm">
              Who We Are
            </span>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-sky-800">
              Strategic partner for healthcare and MedTech in Tanzania
            </h1>
            <p className="text-sm md:text-base text-sky-700 leading-relaxed">
              Medisafe Suppliers Ltd supports international companies with regulatory pathways through TMDA and NIMR,
              institutional engagement, and market entry aligned with national system priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="space-y-4 text-sm text-slate-700 max-w-3xl">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">Company overview</h2>
          <p className="text-justify">
            Medisafe Suppliers Ltd supports international healthcare and medical technology companies seeking to establish
            a sustainable presence in Tanzania. Our work is grounded in a deep understanding of the country&apos;s healthcare
            landscape, regulatory environment, and institutional dynamics.
          </p>
          <p className="text-justify">
            We operate at national, institutional, and clinical levels to ensure that global innovation aligns with
            Tanzania&apos;s priorities, operational realities, and longterm system needs.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-5 py-8 md:px-8 md:py-10">
          <p className="text-[11px] font-semibold tracking-wide text-sky-600 uppercase mb-2">Public sector</p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">Strengthening national healthcare systems</h2>
          <div className="space-y-4 text-sm text-slate-700 text-justify">
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

        <MissionVisionValues />
      </section>
    </main>
  );
}
