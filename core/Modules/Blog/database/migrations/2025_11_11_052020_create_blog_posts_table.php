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
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category_id');
            $table->bigInteger('admin_id');
            $table->string('title');
            $table->text('slug')->nullable();
            $table->longText('content');
            $table->string('image');
            $table->bigInteger('views')->nullable();
            $table->tinyInteger('status')->default(1)->comment('0=inactive, 1=active');
            $table->string('tag_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
};
