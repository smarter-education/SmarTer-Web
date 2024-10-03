<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ===============================================================================================================
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
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/about', function () {
    return Inertia::render('About/About');
});
// ===============================================================================================================

// Auth
Route::group(['prefix' => 'auth'], function () {
    Route::get('/login', function () {
        return Inertia::render('Auth/Login');
    });
    Route::get('/register', function () {
        return Inertia::render('Auth/Register');
    });
    Route::get('/confirm-password', function () {
        return Inertia::render('Auth/ConfirmPassword');
    });
    // You can add more routes here if needed
});


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

// *====== Dashboard ======
Route::get('/siswadash', function () {
    return Inertia::render('Dashboard/Siswa/Dashboard', [
        'title' => 'Dashboard'
    ]);
});
Route::get('/siswakelas', function () {
    return Inertia::render('Dashboard/Siswa/Kelas', [
        'title' => 'Kelas Saya'
    ]);
});
Route::get('/admin', function () {
    return Inertia::render('Dashboard/Admin/Product', [
        'title' => 'Admin Dashboard'
    ]);
});

// *====== Pembayaraan ======
Route::get('/pemkos', function () {
    return Inertia::render('Pembayaran/Pembayarankosong', [
        'title' => 'Admin Dashboard'
    ]);
});
Route::get('/pemitem', function () {
    return Inertia::render('Pembayaran/Pembayaranitem', [
        'title' => 'Admin Dashboard'
    ]);
});

// Product Page

Route::get('/product', function () {
    return Inertia::render('Product/Main', [
        'title' => 'Admin Dashboard'
    ]);
});



// ===============================================================================================================
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
// ===============================================================================================================
