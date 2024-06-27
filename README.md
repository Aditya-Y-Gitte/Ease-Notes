# Note-Taking-Application
Application to keep notes


<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about-us', [PageController::class, 'aboutUs'])->name('aboutUs');
Route::get('/courses', [PageController::class, 'courses'])->name('courses');
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');
Route::get('/iqac', [PageController::class, 'iqac'])->name('iqac');
Route::get('/naac', [PageController::class, 'naac'])->name('naac');
Route::get('/affiliation', [PageController::class, 'affiliation'])->name('affiliation');
Route::get('/contact-us', [PageController::class, 'contactUs'])->name('contactUs');

