<?php
if (!isset($pageTitle)) {
    $pageTitle = 'Medisafe Suppliers Limited';
}

// Helper to mark active nav item
function nav_active(string $path): string
{
    $current = basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)) ?: 'index.php';
    return $current === $path ? 'text-sky-600 font-semibold' : 'text-slate-700';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            500: '#0ea5e9',
                            600: '#0284c7',
                        }
                    }
                }
            }
        };
    </script>
</head>
<body class="bg-slate-50 text-slate-900">
    <!-- Navbar -->
    <header class="bg-white shadow-md sticky top-0 z-40">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex items-center justify-between py-3">
                <a href="index.php" class="flex items-center gap-2">
                    <img src="assets/img/medilogo.png" alt="Medisafe Suppliers Limited logo" class="h-10 w-auto">
                    <div class="leading-tight">
                        <div class="font-semibold text-slate-900">MSL</div>
                        <div class="text-xs text-slate-500">Medisafe Suppliers Limited</div>
                    </div>
                </a>

                <button id="navToggle" class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-700">
                    <span class="sr-only">Open navigation</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <nav id="mainNav" class="hidden md:flex items-center gap-6 text-sm">
                    <a href="index.php" class="<?= nav_active('index.php') ?> hover:text-sky-600">Home</a>
                    <a href="about.php" class="<?= nav_active('about.php') ?> hover:text-sky-600">About</a>
                    <a href="products-services.php" class="<?= nav_active('products-services.php') ?> hover:text-sky-600">Products &amp; Services</a>
                    <a href="corporates-investors.php" class="<?= nav_active('corporates-investors.php') ?> hover:text-sky-600">Corporates &amp; Investors</a>
                    <a href="quality-compliance.php" class="<?= nav_active('quality-compliance.php') ?> hover:text-sky-600">Quality &amp; Compliance</a>
                    <a href="partners.php" class="<?= nav_active('partners.php') ?> hover:text-sky-600">Partners</a>
                    <a href="contact.php" class="inline-flex items-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700">
                        Contact
                    </a>
                </nav>
            </div>

            <!-- Mobile menu -->
            <nav id="mobileNav" class="md:hidden hidden border-t border-slate-100 pb-3">
                <div class="flex flex-col gap-2 pt-2 text-sm">
                    <a href="index.php" class="px-1 <?= nav_active('index.php') ?>">Home</a>
                    <a href="about.php" class="px-1 <?= nav_active('about.php') ?>">About</a>
                    <a href="products-services.php" class="px-1 <?= nav_active('products-services.php') ?>">Products &amp; Services</a>
                    <a href="corporates-investors.php" class="px-1 <?= nav_active('corporates-investors.php') ?>">Corporates &amp; Investors</a>
                    <a href="quality-compliance.php" class="px-1 <?= nav_active('quality-compliance.php') ?>">Quality &amp; Compliance</a>
                    <a href="partners.php" class="px-1 <?= nav_active('partners.php') ?>">Partners</a>
                    <a href="contact.php" class="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700 w-fit">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    </header>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const toggle = document.getElementById('navToggle');
            const mobile = document.getElementById('mobileNav');
            if (toggle && mobile) {
                toggle.addEventListener('click', () => {
                    mobile.classList.toggle('hidden');
                });
            }
        });
    </script>

