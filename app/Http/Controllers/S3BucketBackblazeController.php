<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class S3BucketBackblazeController extends Controller
{
    public function uploadFile(Request $request)
    {
        $file = $request->file('file');
        $path = Storage::disk('backblaze')->putFile('/files/smarter', $file);

        return response()->json(['path' => $path], 201);
    }

    public function deleteFile(Request $request)
    {
        $fileName = $request->file;

        $deletedWithoutRoot = Storage::disk('backblaze')->delete($fileName);
        $deletedFromRoot = Storage::disk('backblaze')->delete("/files/{$fileName}");
        $deletedFromSmarter = Storage::disk('backblaze')->delete("/files/smarter/{$fileName}");

        if ($deletedFromRoot || $deletedFromSmarter || $deletedWithoutRoot) {
            return response()->json(['message' => 'File deleted successfully'], 200);
        }

        return response()->json(['message' => 'Failed to delete file'], 500);
    }

    public function listFiles()
    {
        $files = Storage::disk('backblaze')->allFiles();

        return response()->json($files, 200);
    }

    public function downloadFile(Request $request)
    {
        $file = $request->input('file');  // Menggunakan input, bukan file

        if (Storage::disk('backblaze')->exists($file)) {  // Memeriksa apakah file ada
            $fileContent = Storage::disk('backblaze')->get($file);

            return response()->streamDownload(function () use ($fileContent) {
                echo $fileContent;
            }, basename($file));  // Nama file sebagai nama default untuk download
        }

        return response()->json(['message' => 'File not found'], 404);
    }
    public function deleteFolder(Request $request)
    {
        $folderName = $request->name;

        if (Storage::disk('backblaze')->deleteDirectory($folderName)) {
            return response()->json(['message' => 'Folder deleted successfully'], 200);
        }

        return response()->json(['message' => 'Failed to delete folder'], 500);
    }

    public function listFolders()
    {
        $folders = Storage::disk('backblaze')->directories();

        return response()->json($folders, 200);
    }
    public function downloadFolder(Request $request)
    {
        $folderName = $request->name;
        $files = Storage::disk('backblaze')->files($folderName);

        if (empty($files)) {
            return response()->json(['message' => 'Folder is empty'], 404);
        }

        $zip = new \ZipArchive();
        $zipName = $folderName . '.zip';
        $zipPath = storage_path('app/' . $zipName);

        if ($zip->open($zipPath, \ZipArchive::CREATE) !== true) {
            return response()->json(['message' => 'Failed to create zip file'], 500);
        }

        foreach ($files as $file) {
            $zip->addFromString(basename($file), Storage::disk('backblaze')->get($file));
        }

        $zip->close();

        return response()->download($zipPath)->deleteFileAfterSend(true);
    }

    public function uploadFolder(Request $request)
    {
        $folder = $request->file('folder');
        $path = 'folders/' . Str::random(10);

        foreach ($folder as $file) {
            Storage::disk('backblaze')->putFileAs($path, $file, $file->getClientOriginalName());
        }

        return response()->json(['path' => $path], 201);
    }
}
