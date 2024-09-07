<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
<<<<<<< HEAD
    protected $fillable = ['title', 'description', 'content_course', 'is_paid'];

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

=======
    protected $fillable = ['title', 'description', 'category', 'type', 'file_path', 'is_paid'];

    public function subscriptions() {
        return $this->hasMany(Subscription::class);
    }
>>>>>>> c344576 (add model for Courses, Subscription and Payment include relational database)
}
