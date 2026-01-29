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
        Schema::table('cars', function (Blueprint $table) {
            
            if(Schema::hasColumn('cars','engine_type_id'))
            {
                $table->dropColumn('engine_type_id');
            }
            if(Schema::hasColumn('cars','fual_type_id'))
            {
                $table->dropColumn('fual_type_id');
            }

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->unsignedBigInteger('engine_type_id');
            $table->unsignedBigInteger('fual_type_id');

        });
    }
};
