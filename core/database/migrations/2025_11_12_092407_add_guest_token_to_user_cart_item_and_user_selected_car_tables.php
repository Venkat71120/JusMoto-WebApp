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
        // Add guest_token to user_cart_items
        if (Schema::hasTable('user_cart_items') && !Schema::hasColumn('user_cart_items', 'guest_token')) {
            Schema::table('user_cart_items', function (Blueprint $table) {
                $table->string('guest_token', 100)
                    ->nullable()
                    ->index()
                    ->after('user_id');
            });
        }

        // Add guest_token to user_selected_cars
        if (Schema::hasTable('user_selected_cars') && !Schema::hasColumn('user_selected_cars', 'guest_token')) {
            Schema::table('user_selected_cars', function (Blueprint $table) {
                $table->string('guest_token', 100)
                    ->nullable()
                    ->index()
                    ->after('user_id');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('user_cart_items') && Schema::hasColumn('user_cart_items', 'guest_token')) {
            Schema::table('user_cart_items', function (Blueprint $table) {
                $table->dropColumn('guest_token');
            });
        }

        if (Schema::hasTable('user_selected_cars') && Schema::hasColumn('user_selected_cars', 'guest_token')) {
            Schema::table('user_selected_cars', function (Blueprint $table) {
                $table->dropColumn('guest_token');
            });
        }
    }
};
