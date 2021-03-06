<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('users', 'Api\UserController@index');
Route::post('users/store', 'Api\UserController@store');
Route::post('login', 'Api\UserController@check_login');
Route::get('users/{id}', 'Api\UserController@show');
Route::post('users/update', 'Api\UserController@update');
Route::get('users/delete/{id}', 'Api\UserController@destroy');
