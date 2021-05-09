<?php

namespace App\Http\Controllers;

use App\Intervention;
use Illuminate\Http\Request;
use App\Niche;
use App\Ligne;

class InterventionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $niche= Niche::findOrFail($request->niche_id);
        //$ligne= Ligne::findOrFail($request->ligne_id);
       $intervention = new Intervention();
       $intervention->type = $request->type;
       $intervention->ligne_id = $request->ligne_id;
       $intervention->niche_id = $request->niche_id;
    //    $intervention->user_id=0;
    $intervention->save();


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\intervention  $intervention
     * @return \Illuminate\Http\Response
     */
    public function show(intervention $intervention)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\intervention  $intervention
     * @return \Illuminate\Http\Response
     */
    public function edit(intervention $intervention)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\intervention  $intervention
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, intervention $intervention)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\intervention  $intervention
     * @return \Illuminate\Http\Response
     */
    public function destroy(intervention $intervention)
    {
        //
    }
}
