import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Medisafe enquiry from ${name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:info@medisafesuppliers.co.tz?subject=${subject}&body=${body}`;
  };

  return (
    <main className="pb-10">
      <section className="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
            Contact
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">Start a Conversation</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Medisafe Suppliers Ltd supports global healthcare and medical technology companies seeking to enter or expand
            within Tanzania.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-8 items-start">
        <div className="space-y-4 text-sm text-slate-700">
          <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
          <p>
            <span className="block text-xs font-semibold text-slate-900">Email</span>
            <a href="mailto:info@medisafesuppliers.co.tz" className="text-sky-700 hover:text-sky-800">
              info@medisafesuppliers.co.tz
            </a>
          </p>
          <p>
            <span className="block text-xs font-semibold text-slate-900">Location</span>
            Dar es Salaam, Tanzania
          </p>
          <p>
            <span className="block text-xs font-semibold text-slate-900">Business hours</span>
            Monday–Friday · 8:00–17:00
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">Send a message</h2>
          <form onSubmit={handleSubmit} className="grid gap-3 text-sm">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-slate-600 mb-1">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-slate-600 mb-1">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-xs font-medium text-slate-600 mb-1">
                Company
              </label>
              <input
                id="contact-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                autoComplete="organization"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-slate-600 mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-y"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-sky-700 w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
