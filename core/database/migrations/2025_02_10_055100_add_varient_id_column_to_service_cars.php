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
        if (Schema::hasTable('service__cars') && !Schema::hasColumn('service__cars', 'varient_id')) {
            Schema::table('service__cars', function (Blueprint $table) {
                $table->unsignedBigInteger('varient_id');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('service__cars', function (Blueprint $table) {
            $table->dropColumn('varient_id');
        });
    }
};
