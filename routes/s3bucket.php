<?php

use App\Http\Controllers\S3BucketBackblazeController;
use Illuminate\Support\Facades\Route;

<<<<<<< HEAD
Route::prefix('s3bucket')->group(function () {
    Route::post('/file/upload-file', [S3BucketBackblazeController::class, 'uploadFile']);
    Route::delete('/file/delete-file', [S3BucketBackblazeController::class, 'deleteFile']);
    Route::get('/file/list-files', [S3BucketBackblazeController::class, 'listFiles']);
    Route::get('/file/download-file', [S3BucketBackblazeController::class, 'downloadFile']);
    Route::delete('/folder/delete-folder', [S3BucketBackblazeController::class, 'deleteFolder']);
    Route::get('/folder/list-folders', [S3BucketBackblazeController::class, 'listFolders']);
});
require __DIR__.'/courses.php';

=======
    Route::post('/folder/file/upload-file', [S3BucketBackblazeController::class, 'uploadFile']);
    Route::delete('/folder/file/delete-file', [S3BucketBackblazeController::class, 'deleteFile']);
    Route::get('/folder/file/list-files', [S3BucketBackblazeController::class, 'listFiles']);
    Route::get('/folder/file/download-file', [S3BucketBackblazeController::class, 'downloadFile']);
    Route::delete('/folder/delete-folder', [S3BucketBackblazeController::class, 'deleteFolder']);
    Route::get('/folder/list-folders', [S3BucketBackblazeController::class, 'listFolders']);
    Route::get('/folder/download-folder', [S3BucketBackblazeController::class, 'downloadFolder']);
    Route::post('/folder/upload-folder', [S3BucketBackblazeController::class, 'uploadFolder']);
    Route::delete('/folder/delete-folder-content', [S3BucketBackblazeController::class, 'deleteFolderContent']);
    Route::get('/folder/download-folder-content', [S3BucketBackblazeController::class, 'downloadFolderContent']);
>>>>>>> 46a6107 (adjust CSRF, Url for s3bucket and downloadFile)
