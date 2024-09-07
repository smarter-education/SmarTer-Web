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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');  // Judul pelajaran seperti Matematika, Biologi, dll.
            $table->text('description');
            $table->string('content_course');  // Lokasi file video atau dokumen di penyimpanan
            $table->boolean('is_paid')->default(true);  // Apakah konten berbayar?
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
