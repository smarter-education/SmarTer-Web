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
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users-google')->onDelete('cascade');
            $table->foreignId('courses_id')->constrained('courses')->onDelete('cascade');
            $table->enum('status', ['pending', 'paid', 'failed'])->default('pending');  // Status pembayaran
            $table->decimal('amount', 10, 2);  // Jumlah pembayaran
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
