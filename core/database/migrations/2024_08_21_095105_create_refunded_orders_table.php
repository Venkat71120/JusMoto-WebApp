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
        Schema::create('refunded_orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('user_id');
            $table->double('amount');
            $table->longText('cancel_reason')->nullable();
            $table->bigInteger('gateway_id')->nullable();
            $table->longText('gateway_fields')->nullable();
            $table->string('image')->nullable();
            $table->integer('status')->default(0)->comment('0=pending, 1=complete, 2=cancel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('refunded_orders');
    }
};
