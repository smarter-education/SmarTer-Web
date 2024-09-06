<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    public function getAllCourses(Request $request) {
        $courses = Courses::all();
        return response()->json($courses, 200);
    }

    public function addCourses(Request $request) {
        // Validasi data input
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content_course' => 'required|file|mimes:pdf|max:10240',  // Validasi bahwa file harus berupa PDF dan ukuran maksimal 10MB
            'is_paid' => 'required|boolean'
        ]);

        // Mengambil file PDF dari request
        $file_course = $request->file('content_course');

        // Menyimpan file PDF ke penyimpanan Backblaze
        try {
            $content_course = Storage::disk('backblaze')->putFile('/files/smarter', $file_course);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gagal mengunggah file ke Backblaze',
                'error' => $e->getMessage()
            ], 500);
        }

        // Membuat record baru di database
        try {
            $course = Courses::create([
                'title' => $request->input('title'),
                'description' => $request->input('description'),
                'content_course' => $content_course,  // Lokasi file di Backblaze
                'is_paid' => $request->input('is_paid'),
            ]);

            return response()->json([
                'message' => 'Kursus berhasil ditambahkan',
                'course' => $course
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gagal menambahkan kursus',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
