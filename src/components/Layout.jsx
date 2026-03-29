import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/medilogo.png';

const navLinkClass = ({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700');

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeMobile = () => setMobileOpen(false);

  const desktopItems = (
    <>
      <NavLink to="/" end className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={navLinkClass}>
        Who We Are
      </NavLink>
      <NavLink to="/products-services" className={navLinkClass}>
        What We Do
      </NavLink>
      <NavLink to="/sectors" className={navLinkClass}>
        Sectors
      </NavLink>
      <NavLink to="/why-tanzania" className={navLinkClass}>
        Why Tanzania
      </NavLink>
      <NavLink to="/team" className={navLinkClass}>
        Team
      </NavLink>
      <NavLink to="/insights" className={navLinkClass}>
        Insights
      </NavLink>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-justify">
      <header className="bg-white text-left shadow-md sticky top-0 z-40 overflow-visible">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 overflow-visible">
            <Link
              to="/"
              className="relative flex h-16 min-w-[13rem] max-w-[22rem] shrink-0 items-center overflow-visible py-0 pr-1 sm:min-w-[15rem] sm:max-w-[24rem]"
              aria-label="Medisafe home"
            >
              <img
                src={logo}
                alt="Medisafe Suppliers Limited logo"
                className="h-12 w-auto max-w-none origin-left object-left object-contain sm:h-[3.25rem] [transform:scale(2.85)] sm:[transform:scale(3.05)]"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-5 text-[14px] flex-wrap justify-end">
              {desktopItems}
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700 shrink-0"
              >
                Contact
              </Link>
            </nav>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 text-slate-700"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="block w-4 h-[1px] bg-current relative">
                <span className="absolute -top-1.5 left-0 w-4 h-[1px] bg-current" />
                <span className="absolute top-1.5 left-0 w-4 h-[1px] bg-current" />
              </span>
            </button>
          </div>

          {mobileOpen && (
            <nav className="lg:hidden pb-3 border-t border-slate-100">
              <div className="flex flex-col gap-2 pt-2 text-sm">
                <NavLink to="/" end className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  Who We Are
                </NavLink>
                <NavLink to="/products-services" className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  What We Do
                </NavLink>
                <NavLink to="/sectors" className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  Sectors
                </NavLink>
                <NavLink to="/why-tanzania" className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  Why Tanzania
                </NavLink>
                <NavLink to="/team" className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  Team
                </NavLink>
                <NavLink to="/insights" className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`} onClick={closeMobile}>
                  Insights
                </NavLink>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700 w-fit"
                  onClick={closeMobile}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-4">
        <div className="bg-gradient-to-b from-sky-100 via-sky-100 to-sky-200 text-slate-800 text-[13px]">
          <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2fr)_minmax(0,2.1fr)]">
            <div className="space-y-2">
              <p className="font-semibold text-slate-900 text-[15px]">Medisafe Suppliers Limited</p>
              <p className="text-[12px] text-slate-600">
                Strategic advisory, regulatory navigation, and institutional engagement for healthcare and MedTech entering Tanzania.
              </p>
              <ul className="space-y-1 text-[12px] text-slate-700">
                <li>Dar es Salaam, Tanzania</li>
                <li>
                  <a href="mailto:info@medisafesuppliers.co.tz" className="hover:text-sky-700">
                    info@medisafesuppliers.co.tz
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[12px] text-slate-700">
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 mb-1 text-[13px]">Site</p>
                <Link to="/about" className="block hover:text-sky-700">
                  Who We Are
                </Link>
                <Link to="/products-services" className="block hover:text-sky-700">
                  What We Do
                </Link>
                <Link to="/sectors" className="block hover:text-sky-700">
                  Sectors
                </Link>
                <Link to="/why-tanzania" className="block hover:text-sky-700">
                  Why Tanzania
                </Link>
                <Link to="/team" className="block hover:text-sky-700">
                  Team
                </Link>
                <Link to="/insights" className="block hover:text-sky-700">
                  Insights
                </Link>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 mb-1 text-[13px]">More</p>
                <Link to="/quality-compliance" className="block hover:text-sky-700">
                  Quality &amp; Compliance
                </Link>
                <Link to="/corporates-investors" className="block hover:text-sky-700">
                  Corporates &amp; Investors
                </Link>
                <Link to="/partners" className="block hover:text-sky-700">
                  Partners
                </Link>
                <Link to="/contact" className="block hover:text-sky-700">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-slate-900 text-[15px]">Stay informed</p>
              <p className="text-[12px] text-slate-600">
                Regulatory updates, market entry perspectives, and sector commentary from our work in Tanzania.
              </p>
              <div className="mt-2 flex items-center gap-2 bg-white rounded-full shadow-sm border border-sky-100 px-2 py-1.5 max-w-xs">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border-none text-[12px] text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-sky-600 text-white px-3 py-1 text-[12px] font-semibold hover:bg-sky-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sky-900 text-slate-100 text-[12px]">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-1.5">
            <p>&copy; {new Date().getFullYear()} Medisafe Suppliers Limited. All rights reserved.</p>
            <p>Dar es Salaam, Tanzania</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
