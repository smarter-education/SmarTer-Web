<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['user_id', 'subscription_id', 'amount', 'status', 'payment_method'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function subscription() {
        return $this->belongsTo(Subscription::class);
    }
}
