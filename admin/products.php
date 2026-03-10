<?php
require __DIR__ . '/../db.php';
require __DIR__ . '/../config.php';

session_start();

// Simple admin auth
if (!isset($_SESSION['is_admin'])) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
        if (hash_equals(ADMIN_PASSWORD, $_POST['password'])) {
            $_SESSION['is_admin'] = true;
            header('Location: products.php');
            exit;
        }
        $loginError = 'Incorrect password.';
    }
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin Login | Medisafe</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-50 text-slate-900 flex items-center justify-center min-h-screen">
        <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-6 w-full max-w-sm text-sm">
            <h1 class="text-lg font-semibold mb-4 text-slate-900">Medisafe Admin</h1>
            <?php if (!empty($loginError)): ?>
                <p class="text-xs text-red-600 mb-3"><?= htmlspecialchars($loginError, ENT_QUOTES, 'UTF-8') ?></p>
            <?php endif; ?>
            <form method="post" class="space-y-3">
                <div>
                    <label class="block text-xs font-medium text-slate-700 mb-1" for="password">Admin password</label>
                    <input type="password" id="password" name="password" required
                           class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500">
                </div>
                <button type="submit"
                        class="w-full inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700">
                    Sign in
                </button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

$pdo = get_db_connection();
$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'create') {
    $name = trim($_POST['name'] ?? '');
    $category = trim($_POST['category'] ?? '');
    $sellingPrice = $_POST['selling_price'] !== '' ? (float)$_POST['selling_price'] : null;
    $costPrice = $_POST['cost_price'] !== '' ? (float)$_POST['cost_price'] : null;
    $marginPercentage = $_POST['margin_percentage'] !== '' ? (float)$_POST['margin_percentage'] : null;
    $description = trim($_POST['description'] ?? '');

    if ($name === '') {
        $error = 'Product name is required.';
    } else {
        $stmt = $pdo->prepare('
            INSERT INTO products (name, category, selling_price, cost_price, margin_percentage, description)
            VALUES (:name, :category, :selling_price, :cost_price, :margin_percentage, :description)
        ');
        $stmt->execute([
            ':name' => $name,
            ':category' => $category,
            ':selling_price' => $sellingPrice,
            ':cost_price' => $costPrice,
            ':margin_percentage' => $marginPercentage,
            ':description' => $description,
        ]);
        header('Location: products.php');
        exit;
    }
}

$stmt = $pdo->query('SELECT id, name, category, selling_price, cost_price, margin_percentage FROM products ORDER BY created_at DESC, id DESC');
$products = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Products | Medisafe Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-900">
    <div class="max-w-5xl mx-auto px-4 py-6 text-sm">
        <header class="flex items-center justify-between mb-6">
            <h1 class="text-lg font-semibold text-slate-900">Products &amp; Profit Overview</h1>
            <a href="../products-services.php" class="text-xs text-sky-700 hover:text-sky-800">View public site</a>
        </header>

        <div class="grid md:grid-cols-[minmax(0,2.2fr)_minmax(0,3fr)] gap-6 items-start">
            <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                <h2 class="text-sm font-semibold text-slate-900 mb-3">Add Product</h2>
                <?php if ($error): ?>
                    <p class="text-xs text-red-600 mb-2"><?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p>
                <?php endif; ?>
                <form method="post" class="space-y-3">
                    <input type="hidden" name="action" value="create">
                    <div>
                        <label class="block text-xs font-medium text-slate-700 mb-1" for="name">Product name *</label>
                        <input type="text" id="name" name="name" required
                               class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-700 mb-1" for="category">Category</label>
                        <input type="text" id="category" name="category"
                               class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500">
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1" for="selling_price">Selling price</label>
                            <input type="number" step="0.01" id="selling_price" name="selling_price"
                                   class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500">
                        </div>
                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1" for="cost_price">Cost price</label>
                            <input type="number" step="0.01" id="cost_price" name="cost_price"
                                   class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500">
                        </div>
                        <div>
                            <label class="block text-xs font-medium text-slate-700 mb-1" for="margin_percentage">Margin %</label>
                            <input type="number" step="0.1" id="margin_percentage" name="margin_percentage"
                                   class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-700 mb-1" for="description">
                            How we sell / how we get profit
                        </label>
                        <textarea id="description" name="description" rows="3"
                                  class="w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"></textarea>
                    </div>
                    <button type="submit"
                            class="inline-flex items-center justify-center rounded-full bg-sky-600 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:bg-sky-700">
                        Save product
                    </button>
                </form>
            </section>

            <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                <h2 class="text-sm font-semibold text-slate-900 mb-3">Existing Products</h2>
                <?php if (count($products) === 0): ?>
                    <p class="text-xs text-slate-500">No products added yet.</p>
                <?php else: ?>
                    <div class="overflow-x-auto">
                        <table class="min-w-full text-xs">
                            <thead class="bg-slate-50">
                            <tr class="text-slate-600">
                                <th class="text-left px-3 py-2 font-semibold">Name</th>
                                <th class="text-left px-3 py-2 font-semibold">Category</th>
                                <th class="text-right px-3 py-2 font-semibold">Sell</th>
                                <th class="text-right px-3 py-2 font-semibold">Cost</th>
                                <th class="text-right px-3 py-2 font-semibold">Margin %</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach ($products as $product): ?>
                                <tr class="border-t border-slate-100">
                                    <td class="px-3 py-1.5 text-slate-900">
                                        <?= htmlspecialchars($product['name'], ENT_QUOTES, 'UTF-8') ?>
                                    </td>
                                    <td class="px-3 py-1.5 text-slate-700">
                                        <?= htmlspecialchars($product['category'] ?? '', ENT_QUOTES, 'UTF-8') ?>
                                    </td>
                                    <td class="px-3 py-1.5 text-right text-slate-700">
                                        <?= $product['selling_price'] !== null ? number_format((float)$product['selling_price'], 2) : '-' ?>
                                    </td>
                                    <td class="px-3 py-1.5 text-right text-slate-700">
                                        <?= $product['cost_price'] !== null ? number_format((float)$product['cost_price'], 2) : '-' ?>
                                    </td>
                                    <td class="px-3 py-1.5 text-right text-slate-700">
                                        <?= $product['margin_percentage'] !== null ? number_format((float)$product['margin_percentage'], 1) . '%' : '-' ?>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                <?php endif; ?>
            </section>
        </div>
    </div>
</body>
</html>

