import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/img/medilogo.png';

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 overflow-visible">
              <img
                src={logo}
                alt="Medisafe Suppliers Limited logo"
                className="h-20 w-auto scale-150 object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-[15px]">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700')}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700')}
              >
                About
              </NavLink>
              <NavLink
                to="/products-services"
                className={({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700')}
              >
                Products &amp; Services
              </NavLink>
              <NavLink
                to="/corporates-investors"
                className={({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700')}
              >
                Corporates &amp; Investors
              </NavLink>
              <NavLink
                to="/quality-compliance"
                className={({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700')}
              >
                Quality &amp; Compliance
              </NavLink>
              <NavLink
                to="/partners"
                className={({ isActive }) => (isActive ? 'text-sky-600 font-semibold' : 'text-slate-700')}
              >
                Partners
              </NavLink>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 text-slate-700"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="block w-4 h-[1px] bg-current relative">
                <span className="absolute -top-1.5 left-0 w-4 h-[1px] bg-current" />
                <span className="absolute top-1.5 left-0 w-4 h-[1px] bg-current" />
              </span>
            </button>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <nav className="md:hidden pb-3 border-t border-slate-100">
              <div className="flex flex-col gap-2 pt-2 text-sm">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/products-services"
                  className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Products &amp; Services
                </NavLink>
                <NavLink
                  to="/corporates-investors"
                  className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Corporates &amp; Investors
                </NavLink>
                <NavLink
                  to="/quality-compliance"
                  className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Quality &amp; Compliance
                </NavLink>
                <NavLink
                  to="/partners"
                  className={({ isActive }) => `px-1 ${isActive ? 'text-sky-600 font-semibold' : 'text-slate-700'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Partners
                </NavLink>
                <Link
                  to="/contact"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700 w-fit"
                  onClick={() => setMobileOpen(false)}
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
        {/* Upper footer */}
        <div className="bg-gradient-to-b from-sky-100 via-sky-100 to-sky-200 text-slate-800 text-[13px]">
          <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,2fr)_minmax(0,2.1fr)]">
            {/* Company column */}
            <div className="space-y-2">
              <p className="font-semibold text-slate-900 text-[15px]">Medisafe Suppliers Limited</p>
              <p className="text-[12px] text-slate-600">
                Healthcare market entry &amp; compliant supply of essential medical consumables across Tanzania and East Africa.
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

            {/* Links column */}
            <div className="grid grid-cols-2 gap-4 text-[12px] text-slate-700">
              <div className="space-y-1">
              <p className="font-semibold text-slate-900 mb-1 text-[13px]">Navigation</p>
                <Link to="/about" className="block hover:text-sky-700">
                  About Us
                </Link>
                <Link to="/products-services" className="block hover:text-sky-700">
                  Products &amp; Services
                </Link>
                <Link to="/corporates-investors" className="block hover:text-sky-700">
                  Corporates &amp; Investors
                </Link>
                <Link to="/quality-compliance" className="block hover:text-sky-700">
                  Quality &amp; Compliance
                </Link>
                <Link to="/partners" className="block hover:text-sky-700">
                  Partners
                </Link>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 mb-1 text-[13px]">Contact</p>
                <Link to="/contact" className="block hover:text-sky-700">
                  Contact Us
                </Link>
                <p>Mon–Fri · 8:00–17:00</p>
              </div>
            </div>

            {/* Newsletter-style column */}
            <div className="space-y-2">
              <p className="font-semibold text-slate-900 text-[15px]">Stay informed</p>
              <p className="text-[12px] text-slate-600">
                Receive updates on Medisafe’s products, regulatory changes, and healthcare supply insights.
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

        {/* Lower footer bar */}
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

