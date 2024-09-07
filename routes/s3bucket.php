<?php

use App\Http\Controllers\S3BucketBackblazeController;
use Illuminate\Support\Facades\Route;

Route::prefix('s3bucket')->group(function () {
    Route::post('/file/upload-file', [S3BucketBackblazeController::class, 'uploadFile']);
    Route::delete('/file/delete-file', [S3BucketBackblazeController::class, 'deleteFile']);
    Route::get('/file/list-files', [S3BucketBackblazeController::class, 'listFiles']);
    Route::get('/file/download-file', [S3BucketBackblazeController::class, 'downloadFile']);
    Route::delete('/folder/delete-folder', [S3BucketBackblazeController::class, 'deleteFolder']);
    Route::get('/folder/list-folders', [S3BucketBackblazeController::class, 'listFolders']);
});
require __DIR__.'/courses.php';

