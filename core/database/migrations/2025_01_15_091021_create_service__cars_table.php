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
        Schema::create('service__cars', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('service_id');
            $table->unsignedBigInteger('car_id');
            $table->integer('image')->nullable();
            $table->decimal('price')->default(0);
            $table->decimal('discount_price')->default(0);
            $table->string('unit')->nullable();
            $table->integer('sold_count')->default(0);
            $table->boolean('use_default')->default(0);
            $table->string("duration")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service__cars');
    }
};
