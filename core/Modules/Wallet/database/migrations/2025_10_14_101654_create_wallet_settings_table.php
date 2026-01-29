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
        Schema::create('wallet_settings', function (Blueprint $table) {
            $table->id();
            $table->decimal('transaction_fee_percentage', 5, 2)->default(0.00);
            $table->decimal('client_min_deposit', 15, 2)->default(1.00);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wallet_settings');
    }
};
