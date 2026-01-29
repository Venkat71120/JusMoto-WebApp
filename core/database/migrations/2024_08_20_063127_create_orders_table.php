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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('admin_id');
            $table->unsignedBigInteger('staff_id')->nullable();
            $table->unsignedBigInteger('outlet_location_id')->nullable();
            $table->date('date')->nullable();
            $table->string('schedule')->nullable();
            $table->string('coupon_code')->nullable();
            $table->string('coupon_type')->nullable();
            $table->double('coupon_amount')->nullable();
            $table->double('delivery_charge')->nullable();
            $table->enum("delivery_mode",['pickup','walkin'])->default('pickup');
            $table->double('sub_total');
            $table->double('tax');
            $table->double('total');
            $table->string('payment_gateway')->nullable();
            $table->string('transaction_id')->nullable();
            $table->string("invoice_number", 50)->unique()->nullable();
            $table->string('payment_attachment')->nullable();
            $table->integer('complete_request')->default(0);
            $table->integer('payment_status')->default(0)->comment('0=pending, 1=completed');
            $table->integer('status')->default(0)->comment('0=pending, 1=active, 2=completed, 3=delivered, 4=cancelled');
            $table->longText('order_note')->nullable();
            $table->integer("is_refunded")->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
