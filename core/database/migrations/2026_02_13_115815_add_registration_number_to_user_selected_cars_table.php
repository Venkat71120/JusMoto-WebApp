<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('user_selected_cars', function (Blueprint $table) {
            $table->string('registration_number')->nullable()->after('fual_type_id');
        });
    }

    public function down(): void
    {
        Schema::table('user_selected_cars', function (Blueprint $table) {
            $table->dropColumn('registration_number');
        });
    }
};