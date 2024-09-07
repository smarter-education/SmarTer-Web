<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    public function getAllCourses(Request $request)
    {
        $courses = Courses::all();
        return response()->json($courses, 200);
    }

    public function addCourses(Request $request)
    {
        try {

            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'content_course' => 'required|file|mimes:pdf', // Changed from 'file' to 'content_course'
                'is_paid' => 'required|boolean',
            ]);

            // Handle file upload to Backblaze
            $file = $request->file('content_course');
            $path = Storage::disk('backblaze')->putFile('/files/smarter', $file);

            $fileexist = Storage::disk('backblaze')->exists('/files/smarter', $file);

            if (!$path) {
                return response()->json(['message' => 'Failed to upload file'], 500);
            } else if ($fileexist) {
                return response()->json(['message' => 'File already exist'], 500);
            }

            // Create the course with the file path
            $course = Courses::create([
                'title' => $request->title,
                'description' => $request->description,
                'content_course' => $path, // Store the path to the file
                'is_paid' => $request->is_paid,
            ]);


            return response()->json($course, 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed to upload file'], 500);
        }
    }

    public function updateCourses(Request $request, $id)
    {
        try {
            // Validasi input
            $request->validate([
                'title' => 'sometimes|string|max:255',
                'description' => 'sometimes|string',
                'content_course' => 'sometimes|file|mimes:pdf',
                'is_paid' => 'sometimes|boolean',
            ]);

            // Temukan course yang akan diperbarui
            $course = Courses::find($id);

            if (!$course) {
                return response()->json(['message' => 'Course not found'], 404);
            }

            // Perbarui data course dengan nilai yang ada di request
            if ($request->has('title')) {
                $course->title = $request->input('title');
            }
            if ($request->has('description')) {
                $course->description = $request->input('description');
            }
            if ($request->has('is_paid')) {
                $course->is_paid = $request->input('is_paid');
            }

            // Handle file upload jika ada file baru
            if ($request->hasFile('content_course')) {
                // Hapus file lama jika ada
                if ($course->content_course) {
                    Storage::disk('backblaze')->delete($course->content_course);
                }

                // Upload file baru ke Backblaze
                $file = $request->file('content_course');
                $path = Storage::disk('backblaze')->putFile('/files/smarter', $file);

                // Update path file
                $course->content_course = $path;
            }

            $course->save();

            return response()->json($course, 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Failed to update course'], 500);
        }
    }


    public function deleteCourse($id)
    {
        $course = Courses::find($id);

        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        // Optionally, delete the file from Backblaze if needed
        $filePath = $course->content_course;
        if ($filePath) {
            Storage::disk('backblaze')->delete($filePath);
        }

        $deleted = $course->delete();

        if ($deleted) {
            return response()->json(['message' => 'Course deleted successfully'], 200);
        }

        return response()->json(['message' => 'Failed to delete course'], 500);
    }

    public function getCourseById($id)
    {
        $course = Courses::find($id);

        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        return response()->json($course, 200);
    }
}
