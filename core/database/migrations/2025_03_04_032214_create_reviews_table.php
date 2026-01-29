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
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('admin_id');
            $table->unsignedBigInteger('reviewer_id');
            $table->decimal('rating', 4, 2);
            $table->unsignedBigInteger('service_id');
            $table->integer('type')->comment('0=service, 1=product');
            $table->longText('message')->nullable();
            $table->string('status')->default('pending')->comment('pending, published');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
