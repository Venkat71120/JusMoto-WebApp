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
        Schema::create('caches', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("admin_id");
            $table->unsignedBigInteger("brand_id");
            $table->unsignedBigInteger("car_id");
            $table->decimal('price')->default(0);
            $table->decimal('discount_price')->default(0);
            $table->string('unit')->nullable();
            $table->boolean('use_default')->default(0);
            $table->string("duration")->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('caches');
    }
};
