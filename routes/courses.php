<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::prefix('courses')->group(function () {
    Route::get('/get-courses', [CourseController::class, 'getAllCourses']);
    Route::post('/add-courses', [CourseController::class, 'addCourses']);
    Route::delete('/delete-courses/{id}', [CourseController::class, 'deleteCourse']);
    Route::get('/get-courses/{id}', [CourseController::class, 'getCourseById']);
});

