<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Modules\SupportTicket\app\Models\Ticket;
use App\Models\Backend\Admin;

echo "=== Tickets in DB ===" . PHP_EOL;
$tickets = Ticket::select('id', 'admin_id', 'user_id', 'title', 'status')->get();
foreach($tickets as $t) {
    echo "ID: {$t->id} | Admin ID: {$t->admin_id} | User ID: {$t->user_id} | Status: {$t->status} | Title: " . substr($t->title, 0, 40) . PHP_EOL;
}
echo "Total tickets: " . $tickets->count() . PHP_EOL;

echo PHP_EOL . "=== Franchise Admins ===" . PHP_EOL;
$admins = Admin::where('is_franchise', 1)->select('id', 'name', 'email', 'is_franchise')->get();
foreach($admins as $a) {
    echo "ID: {$a->id} | Name: {$a->name} | Email: {$a->email}" . PHP_EOL;
}
echo "Total franchise admins: " . $admins->count() . PHP_EOL;

echo PHP_EOL . "=== All Admins ===" . PHP_EOL;
$allAdmins = Admin::select('id', 'name', 'email', 'is_franchise')->get();
foreach($allAdmins as $a) {
    echo "ID: {$a->id} | Name: {$a->name} | Is Franchise: {$a->is_franchise}" . PHP_EOL;
}
