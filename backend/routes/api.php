<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// Auth Routes

Route::post('/register', [UserController::class, "register"]);
Route::post('/login', [UserController::class, "login"]);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/logout', [UserController::class, "logout"]);
});




//  Items Routes
Route::post('storeItem', [ItemsController::class, 'store']);
Route::get('/items', [ItemsController::class, 'index']);
// Route::post('updateItem/{id?}', [ItemsController::class, 'updateItem']);
// Route::delete('deleteItem/{id?}', [ItemsController::class, 'deleteItem']);




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});