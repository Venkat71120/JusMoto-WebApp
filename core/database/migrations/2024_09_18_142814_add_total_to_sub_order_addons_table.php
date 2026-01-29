<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('sub_order_addons') && !Schema::hasColumn('sub_order_addons', 'total')) {
            Schema::table('sub_order_addons', function (Blueprint $table) {
                $table->decimal('total', 10, 2)->nullable()->after('price');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sub_order_addons', function (Blueprint $table) {
            $table->dropColumn('total');
        });
    }
};
