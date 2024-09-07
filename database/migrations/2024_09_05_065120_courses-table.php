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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            $table->string('content_course');  // Lokasi file video atau dokumen di penyimpanan
=======
            $table->string('category');  // Contoh: SMA, Matematika, dll.
            $table->string('type');  // Tipe konten: video, document
            $table->string('file_path');  // Lokasi file video atau dokumen di penyimpanan
>>>>>>> db4c41f (add schema database for courses, subscription and payment without migrating)
=======
            $table->string('content_course');  // Lokasi file video atau dokumen di penyimpanan
>>>>>>> 1004fa4 (adjust schema database and model for courses and add category model and schema (if needed))
=======
            $table->string('content_course');  // Lokasi file video atau dokumen di penyimpanan
>>>>>>> 7b3a13666800d3234fe494b4533d51fcbbf39703
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
