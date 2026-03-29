import React from 'react';

function IconMission({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="10" strokeLinecap="round" />
      <circle cx="12" cy="12" r="6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconVision({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconIntegrity({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function IconCompliance({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l1.5 1.5 3-3" />
    </svg>
  );
}

function IconReliability({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconProfessionalism({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h-4.5m4.5 0V6.75A2.25 2.25 0 0011.25 4.5h-1.5A2.25 2.25 0 007.5 6.75v7.4m9-6.65V6.75a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 0011.25 6.75v.9"
      />
    </svg>
  );
}

function IconPartnership({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.09 9.09 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 006 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  );
}

const VALUES = [
  { title: 'Integrity', desc: 'Honesty, transparency, professionalism', Icon: IconIntegrity },
  { title: 'Compliance', desc: 'TMDA, MSD, ISO, CE, FDA adherence', Icon: IconCompliance },
  { title: 'Reliability', desc: 'Consistent supply and service', Icon: IconReliability },
  { title: 'Professionalism', desc: 'High standards of execution', Icon: IconProfessionalism },
  { title: 'Partnership', desc: 'Longterm collaboration', Icon: IconPartnership },
];

export default function MissionVisionValues({ id = 'mission-vision-values', className = '' }) {
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/90 to-sky-50/40 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] md:rounded-[2rem] ${className}`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative px-5 py-9 sm:px-8 sm:py-11 md:px-10 md:py-12">
        <div className="mx-auto mb-9 max-w-xl md:mb-11">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-600 sm:text-[11px]">
            Mission, vision &amp; values
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <article className="flex gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-lg shadow-sky-600/25 sm:h-14 sm:w-14 sm:rounded-[1rem]">
              <IconMission className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="min-w-0 flex-1 pt-0.5 text-justify">
              <h3 className="text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">Mission</h3>
              <p className="mt-3 border-l-[3px] border-sky-400/70 pl-4 text-[15px] font-medium leading-relaxed text-slate-800 sm:text-base sm:leading-relaxed">
                To ensure consistent access to safe, compliant, and highquality medical consumables that strengthen
                healthcare systems.
              </p>
            </div>
          </article>

          <article className="flex gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 text-white shadow-lg shadow-slate-700/20 sm:h-14 sm:w-14 sm:rounded-[1rem]">
              <IconVision className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="min-w-0 flex-1 pt-0.5 text-justify">
              <h3 className="text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600">Vision</h3>
              <p className="mt-3 border-l-[3px] border-slate-400/80 pl-4 text-[15px] font-medium leading-relaxed text-slate-800 sm:text-base sm:leading-relaxed">
                To become East Africa&apos;s most trusted and compliant healthcare supply and market entry partner.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 border-t border-slate-200/80 pt-10 md:mt-12 md:pt-12">
          <h3 className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-600 lg:text-left">
            Our values
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {VALUES.map(({ title, desc, Icon }) => (
              <li
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-justify shadow-sm ring-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200/90 hover:shadow-md hover:shadow-sky-900/[0.04]"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-sky-50 text-sky-700 ring-1 ring-sky-200/60 transition-colors group-hover:from-sky-200/80 group-hover:to-sky-100">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
