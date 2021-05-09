<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Niche;
use App\User;
use Redirect;
use Tymon\JWTAuth\Facades\JWTAuth;
class NicheController extends Controller
{
    private $nb_lignes=0;
    private $id_Niche=0;
    private $sommepuiss=0;
    private $user=null;

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
       if( $user=Auth::user()){ 
       
         return Niche::where('user_id',$user->id)->paginate(5);
    }
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
        
        $niche = new Niche();
        $user=Auth::user();
        $niche->user_id=$user->id;
        $niche->nom = $request->nom;
        $niche->gsm = $request->gsm;
        $niche->map = $request->map;
        $niche->adresse = $request->adresse;
        $niche->save();
       
    
    }
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {     
        $niche=Niche::findOrFail($id);
        return $niche;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $niche= Niche::findOrFail($id); // find it then update it
        $niche->nom = $request->nom;
        $niche->gsm = $request->gsm;
        $niche->map = $request->map;
        $niche->adresse = $request->adresse;
       $niche->puissance_moyenne=$this->sommePuissLigne($id);
       if ($request->has('nombre_lignes')){   
        $niche->nombre_lignes=$request->nombre_lignes;};
        $niche->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) 
    {
        $niche = Niche::findOrFail($id);
        $niche->lignes()->delete();
        $niche->delete();
    }
   
    public function sommePuissLigne($id){
        $sommepuiss=0;
        $niche= Niche::findOrFail($id);
       foreach($niche->lignes as $ligne){
        $sommepuiss= $sommepuiss + $ligne->puissance_moyenne;
       }
        if($sommepuiss !=0){ $ret= $sommepuiss/$niche->lignes->count();}else{
            $ret=0;
        }
        return $ret;
    }
}
