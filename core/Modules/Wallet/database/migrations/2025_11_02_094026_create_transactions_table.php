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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('wallet_id');
            $table->enum('transaction_type', ['deposit', 'payment','refund', 'fee']);
            $table->decimal('amount', 15, 2);
            $table->text('description')->nullable();
            $table->string('payment_gateway')->nullable();
            $table->string('payment_attachment')->nullable();
            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending');
            $table->string('invoice_number')->nullable();
            $table->string('reference_type')->nullable();
            $table->unsignedBigInteger('reference_table_id')->nullable();
            $table->index(['user_id', 'transaction_type']);
            $table->index(['wallet_id', 'status']);
            $table->index('created_at');
            $table->index(['reference_type', 'reference_table_id']);
            $table->foreign('wallet_id')->references('id')->on('wallets')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
