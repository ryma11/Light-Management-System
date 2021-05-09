<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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




Route::post('login', 'UserController@login');


Route::group(['middleware' => 'auth.api'],function(){
    Route::get('logout', 'UserController@logout');
    Route::resource('niches', 'NicheController');

    Route::resource('lignes', 'LigneController');
    Route::put('ligne/{id}', 'LigneController@toggleStatus');
    Route::resource('interventions', 'interventionController');
//  agents
    Route::resource('agents', 'AgentController');
    Route::put('agent/{id}', 'AgentController@blockAgent');
// super admin
Route::post('add-admin', 'SuperAdminController@store');
Route::get('get-admins', 'SuperAdminController@index');
Route::put('edit-admin/{id}', 'SuperAdminController@update');
Route::delete('delete-admin/{id}', 'SuperAdminController@destroy');
Route::put('block-admin/{id}', 'SuperAdminController@blockAdmin');
Route::post('logout', 'UserController@logout');
});






Route::get('gouvernorats', 'GouvernoratController@index');


// Route::get('sms', 'SuperAdminController@sendsms');
