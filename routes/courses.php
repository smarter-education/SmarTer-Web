<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::prefix('courses')->group(function () {
    Route::post('/add-courses', [CourseController::class, 'addCourses']);
    Route::get('/get-courses', [CourseController::class, 'getAllCourses']);
    Route::get('/get-courses/{id}', [CourseController::class, 'getCourseById']);
    Route::put('/update-courses/{id}', [CourseController::class, 'updateCourses']);
    Route::delete('/delete-courses/{id}', [CourseController::class, 'deleteCourse']);
});

