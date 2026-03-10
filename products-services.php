<?php
require __DIR__ . '/db.php';
$pageTitle = 'Products & Services | Medisafe Suppliers Limited';
$pdo = get_db_connection();

// Fetch products for marketing display
$stmt = $pdo->query('SELECT id, name, category, selling_price, cost_price, margin_percentage, description FROM products ORDER BY category, name');
$products = $stmt->fetchAll();
require __DIR__ . '/partials/header.php';
?>

<main class="pb-10">
    <section class="bg-gradient-to-br from-sky-50 via-sky-50 to-slate-50 border-b border-slate-100">
        <div class="max-w-6xl mx-auto px-4 py-10">
            <span class="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-[11px] font-semibold px-3 py-1 mb-3">
                Products &amp; Services
            </span>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                Medical Consumables &amp; Healthcare Supply Solutions
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-3xl">
                Essential, compliant, and high quality medical consumables combined with regulatory, market entry,
                and distribution services.
            </p>
        </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-8 items-start">
        <div class="space-y-6 text-sm text-slate-700">
            <div>
                <h2 class="text-lg md:text-xl font-semibold text-slate-900 mb-2">Medical Consumables</h2>
                <p class="mb-2">
                    All products are sourced from certified international manufacturers and comply with ISO, CE, and FDA standards.
                </p>
                <ul class="list-disc list-inside text-xs space-y-1">
                    <li>Powder free latex examination gloves</li>
                    <li>Sterile surgical latex gloves</li>
                    <li>PPE</li>
                    <li>Diagnostic consumables</li>
                    <li>Wound care products</li>
                    <li>Additional essential medical supplies</li>
                </ul>
            </div>

            <div>
                <h2 class="text-lg md:text-xl font-semibold text-slate-900 mb-2">Regulatory &amp; Market Entry Services</h2>
                <ul class="list-disc list-inside text-xs space-y-1">
                    <li>TMDA licensing and product registration</li>
                    <li>Regulatory documentation support</li>
                    <li>Market entry advisory</li>
                    <li>Institutional engagement (MSD, hospitals, NGOs)</li>
                </ul>
            </div>
        </div>

        <aside class="space-y-4">
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
                <h3 class="text-sm font-semibold text-slate-900 mb-3">Supply Chain &amp; Distribution</h3>
                <ul class="space-y-2 text-xs text-slate-700">
                    <li>Direct global sourcing</li>
                    <li>Warehousing in Dar es Salaam</li>
                    <li>Third-party logistics partnerships</li>
                    <li>Batch documentation and quality verification</li>
                </ul>
            </div>

            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-sm">
                <h3 class="text-sm font-semibold text-slate-900 mb-3">Industries We Serve</h3>
                <ul class="space-y-2 text-xs text-slate-700">
                    <li>Government &amp; public health (MSD, public facilities)</li>
                    <li>Private hospitals, clinics, and diagnostic centres</li>
                    <li>NGOs &amp; donor funded health programs</li>
                    <li>Pharmacies &amp; retail outlets</li>
                </ul>
            </div>
        </aside>
    </section>

    <!-- Dynamic product catalogue from database -->
    <section class="max-w-6xl mx-auto px-4 pb-10">
        <div class="border-t border-slate-100 pt-8">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-lg md:text-xl font-semibold text-slate-900">Product Catalogue</h2>
                    <p class="text-xs text-slate-600">
                        Overview of key products, pricing, and profit drivers for Medisafe.
                    </p>
                </div>
            </div>

            <?php if (count($products) === 0): ?>
                <p class="text-xs text-slate-500">
                    No products added yet. Use the admin area to add products.
                </p>
            <?php else: ?>
                <div class="overflow-x-auto rounded-xl border border-slate-100 bg-white shadow-sm">
                    <table class="min-w-full text-xs">
                        <thead class="bg-slate-50 text-slate-600">
                            <tr>
                                <th class="text-left px-4 py-2 font-semibold">Product</th>
                                <th class="text-left px-4 py-2 font-semibold">Category</th>
                                <th class="text-right px-4 py-2 font-semibold">Selling Price</th>
                                <th class="text-right px-4 py-2 font-semibold">Cost</th>
                                <th class="text-right px-4 py-2 font-semibold">Margin %</th>
                                <th class="text-left px-4 py-2 font-semibold">How We Sell / Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($products as $product): ?>
                            <tr class="border-t border-slate-100">
                                <td class="px-4 py-2 text-slate-900 font-medium">
                                    <?= htmlspecialchars($product['name'], ENT_QUOTES, 'UTF-8') ?>
                                </td>
                                <td class="px-4 py-2 text-slate-700">
                                    <?= htmlspecialchars($product['category'] ?? '', ENT_QUOTES, 'UTF-8') ?>
                                </td>
                                <td class="px-4 py-2 text-right text-slate-700">
                                    <?= $product['selling_price'] !== null ? number_format((float)$product['selling_price'], 2) : '-' ?>
                                </td>
                                <td class="px-4 py-2 text-right text-slate-700">
                                    <?= $product['cost_price'] !== null ? number_format((float)$product['cost_price'], 2) : '-' ?>
                                </td>
                                <td class="px-4 py-2 text-right text-slate-700">
                                    <?= $product['margin_percentage'] !== null ? number_format((float)$product['margin_percentage'], 1) . '%' : '-' ?>
                                </td>
                                <td class="px-4 py-2 text-slate-600 max-w-xs">
                                    <?= nl2br(htmlspecialchars($product['description'] ?? '', ENT_QUOTES, 'UTF-8')) ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php require __DIR__ . '/partials/footer.php'; ?>

