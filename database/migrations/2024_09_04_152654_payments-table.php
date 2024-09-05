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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('subscription_id')->nullable()->constrained('subscriptions')->onDelete('cascade');
            $table->foreignId('courses_id')->nullable()->constrained('courses')->onDelete('cascade');
            $table->enum('payment_type', ['subscription', 'unlock'])->default('subscription');
            $table->decimal('amount', 10, 2);
            $table->enum('status', ['completed', 'failed', 'refunded'])->default('completed');
            $table->string('payment_method');
            $table->timestamps();
        });    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
