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
        Schema::create('order_locations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id')->index();
            $table->unsignedBigInteger('state_id')->nullable()->index();
            $table->unsignedBigInteger('city_id')->nullable()->index();
            $table->unsignedBigInteger('area_id')->nullable()->index();
            $table->string('title')->nullable();
            $table->string('post_code')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('emergency_phone')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->integer('type')->default(0)->comment('1= Office, 0= Home')->index();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_locations');
    }
};
