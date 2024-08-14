<?php

use App\Http\Controllers\S3BucketBackblazeController;
use Illuminate\Support\Facades\Route;

    Route::post('/upload-file', [S3BucketBackblazeController::class, 'uploadFile']);
    Route::delete('/file/delete-file', [S3BucketBackblazeController::class, 'deleteFile']);
    Route::get('/list-files', [S3BucketBackblazeController::class, 'listFiles']);
    Route::get('/download-file', [S3BucketBackblazeController::class, 'downloadFile']);
    Route::post('/createfolder', [S3BucketBackblazeController::class, 'createFolder']);
    Route::delete('/delete-folder', [S3BucketBackblazeController::class, 'deleteFolder']);
    Route::get('/list-folders', [S3BucketBackblazeController::class, 'listFolders']);
    Route::get('/download-folder', [S3BucketBackblazeController::class, 'downloadFolder']);
    Route::post('/upload-folder', [S3BucketBackblazeController::class, 'uploadFolder']);
    Route::delete('/delete-folder-content', [S3BucketBackblazeController::class, 'deleteFolderContent']);
    Route::get('/download-folder-content', [S3BucketBackblazeController::class, 'downloadFolderContent']);
