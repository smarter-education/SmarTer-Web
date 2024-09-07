<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::prefix('courses')->group(function () {
<<<<<<< HEAD
    Route::post('/add-courses', [CourseController::class, 'addCourses']);
    Route::get('/get-courses', [CourseController::class, 'getAllCourses']);
    Route::get('/get-courses/{id}', [CourseController::class, 'getCourseById']);
    Route::put('/update-courses/{id}', [CourseController::class, 'updateCourses']);
    Route::delete('/delete-courses/{id}', [CourseController::class, 'deleteCourse']);
});

=======
    Route::get('/get-courses', [CourseController::class, 'getAllCourses']);
    Route::post('/add-courses', [CourseController::class, 'addCourses']);
    Route::delete('/delete-courses/{id}', [CourseController::class, 'deleteCourse']);
    Route::get('/get-courses/{id}', [CourseController::class, 'getCourseById']);
});
<<<<<<< HEAD
>>>>>>> e66ad5a (add router for courses and adjust in schema table payments and course controllers)
=======

>>>>>>> ab30e8c (add controller for get all, add, getbyId and delete Course and add router for that controller)
