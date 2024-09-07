<?php

use App\Http\Controllers\S3BucketBackblazeController;
use Illuminate\Support\Facades\Route;

<<<<<<< HEAD

=======
>>>>>>> 7b3a13666800d3234fe494b4533d51fcbbf39703
Route::prefix('s3bucket')->group(function () {
    Route::post('/file/upload-file', [S3BucketBackblazeController::class, 'uploadFile']);
    Route::delete('/file/delete-file', [S3BucketBackblazeController::class, 'deleteFile']);
    Route::get('/file/list-files', [S3BucketBackblazeController::class, 'listFiles']);
    Route::get('/file/download-file', [S3BucketBackblazeController::class, 'downloadFile']);
    Route::delete('/folder/delete-folder', [S3BucketBackblazeController::class, 'deleteFolder']);
    Route::get('/folder/list-folders', [S3BucketBackblazeController::class, 'listFolders']);
});
<<<<<<< HEAD
<<<<<<< HEAD
require __DIR__ . '/courses.php';


Route::delete('/folder/delete-folder', [S3BucketBackblazeController::class, 'deleteFolder']);
Route::get('/folder/list-folders', [S3BucketBackblazeController::class, 'listFolders']);
=======
require __DIR__.'/courses.php';

>>>>>>> e66ad5a (add router for courses and adjust in schema table payments and course controllers)
=======
require __DIR__.'/courses.php';

>>>>>>> 7b3a13666800d3234fe494b4533d51fcbbf39703
