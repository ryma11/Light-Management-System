<?php

namespace App\Http\Controllers;

use App\Ligne;
use Illuminate\Http\Request;
use app\Http\Controllers\NicheController;
use App\Niche;
class LigneController extends Controller
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
      return Ligne::latest()->get();
    
      
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    $niche= Niche::findOrFail($request->id_niche);
    if($request->has('nombre_point_limineux')){
        $ligne= new Ligne();
     $ligne->nombre_point_limineux=$request->nombre_point_limineux;
     $ligne->puissance_moyenne=$request->puissance_moyenne;
     $niche->lignes()->save($ligne);
    }  
     }
    

    

    /**
     * Display the specified resource.
     *
     * @param  \App\ligne  $ligne
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ligne=new Ligne();
        $niche=Niche::findOrFail($id);
        return $niche->lignes;
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ligne  $ligne
     * @return \Illuminate\Http\Response
     */
    public function edit(ligne $ligne)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ligne  $ligne
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ligne= Ligne::findOrFail($id); // find it then update it
        $ligne->nombre_point_limineux=$request->nombre_point_limineux;
        $ligne->puissance_moyenne=$request->puissance_moyenne;        
        $ligne->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ligne  $ligne
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ligne = Ligne::findOrFail($id);
        $ligne->delete();
    }
    public function toggleStatus(Request $request, $id)
    {
        $ligne = Ligne::findOrFail($id);
        $ligne->etat = $request->etat;
        $ligne->update();
       
    }
  
    
}
