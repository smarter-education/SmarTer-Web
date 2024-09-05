<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    protected $fillable = ['title', 'description', 'category', 'type', 'file_path', 'is_paid'];

    public function subscriptions() {
        return $this->hasMany(Subscription::class);
    }
}
