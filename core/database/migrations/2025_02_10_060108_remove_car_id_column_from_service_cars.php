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
        Schema::table('service__cars', function (Blueprint $table) {
            if(Schema::hasColumn('service__cars','car_id'))
            {
                $table->dropColumn('car_id');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('service_cars', function (Blueprint $table) {
            $table->unsignedBigInteger('car_id');
            
        });
    }
};
