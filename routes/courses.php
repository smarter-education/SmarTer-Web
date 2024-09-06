<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::prefix('courses')->group(function () {
    Route::get('/get-courses', [CourseController::class, 'getAllCourses']);
    Route::post('/add-courses', [CourseController::class, 'addCourses']);
});
