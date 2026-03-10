<?php
$pageTitle = 'Contact Us | Medisafe Suppliers Limited';
require __DIR__ . '/partials/header.php';
?>

<main class="pb-10">
    <section class="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div class="max-w-6xl mx-auto px-4 py-10">
            <span class="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
                Contact Us
            </span>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                Get in Touch with Medisafe Suppliers Limited
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-3xl">
                We welcome enquiries from healthcare providers, NGOs, government institutions, manufacturers, and investors.
            </p>
        </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
        <div class="space-y-4 text-sm text-slate-700">
            <div>
                <h2 class="text-lg md:text-xl font-semibold text-slate-900 mb-3">Contact Details</h2>
                <p class="mb-3">
                    <span class="block text-xs font-semibold text-slate-900">Email</span>
                    <a href="mailto:info@medisafesuppliers.co.tz" class="text-sm text-sky-700">
                        info@medisafesuppliers.co.tz
                    </a>
                </p>
                <p class="mb-3">
                    <span class="block text-xs font-semibold text-slate-900">Location</span>
                    Dar es Salaam, Tanzania
                </p>
                <p>
                    <span class="block text-xs font-semibold text-slate-900">Business Hours</span>
                    Monday–Friday | 8:00–17:00
                </p>
            </div>
        </div>

        <aside>
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
                <h3 class="text-sm font-semibold text-slate-900 mb-3">Send Us a Message</h3>
                <p class="text-xs text-slate-600 mb-2">
                    Use the contact details provided to share product enquiries, partnership opportunities, or investment-related questions.
                </p>
                <p class="text-[11px] text-slate-500">
                    Our team will respond as soon as possible within business hours.
                </p>
            </div>
        </aside>
    </section>
</main>

<?php require __DIR__ . '/partials/footer.php'; ?>

