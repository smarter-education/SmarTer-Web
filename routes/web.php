<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

<<<<<<< HEAD
// ===============================================================================================================
=======
>>>>>>> 310a911 (first commit too)
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
Route::get('/about', function () {
    return Inertia::render('About/About');
});
<<<<<<< HEAD
// ===============================================================================================================



// *====== My Routes ======
Route::get('/', function () {
    return Inertia::render('Homepage', [
        'title' => 'Home Page'
    ]);
});
Route::get('/company', function () {
    return Inertia::render('Company', [
        'title' => 'Company Page'
    ]);
});
Route::get('/dash', function () {
    return Inertia::render('Dash', [
        'title' => 'Dashboard'
    ]);
});



// ===============================================================================================================
=======

>>>>>>> 310a911 (first commit too)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

<<<<<<< HEAD
require __DIR__ . '/auth.php';
// ===============================================================================================================
=======
require __DIR__.'/auth.php';
>>>>>>> 310a911 (first commit too)
