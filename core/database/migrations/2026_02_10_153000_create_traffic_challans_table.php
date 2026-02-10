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
        Schema::create('traffic_challans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('vehicle_number')->index();
            $table->string('challan_number')->unique();
            $table->string('offence_type');
            $table->text('offence_description')->nullable();
            $table->decimal('fine_amount', 10, 2);
            $table->decimal('paid_amount', 10, 2)->default(0);
            $table->string('offence_location')->nullable();
            $table->dateTime('offence_date')->nullable();
            $table->dateTime('due_date')->nullable();
            $table->enum('status', ['pending', 'paid', 'cancelled'])->default('pending');
            $table->enum('payment_status', ['unpaid', 'paid', 'partial'])->default('unpaid');
            $table->string('payment_method')->nullable();
            $table->string('payment_reference')->nullable();
            $table->string('payment_gateway_response')->nullable();
            $table->dateTime('paid_at')->nullable();
            $table->text('remarks')->nullable();
            $table->string('issuing_authority')->nullable();
            $table->string('api_reference_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('traffic_challans');
    }
};
