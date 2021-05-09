<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gouvernorat;
class GouvernoratController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }
       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gouv = Gouvernorat::latest()->get();
        return $gouv;
      
    }
}
