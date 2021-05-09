<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Mail;
class SuperAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.api');
    }

    public function index()
    {
    
        return User::where('role',0)->paginate(5);
   
    }
    
    public function store(Request $request)
    {
       
        $user = new User();
        $pass=Str::random(8);
        $user->nom = $request->name;
        $user->email = $request->email;
        $user->login = $request->username;
        $user->password= Hash::make($pass);
        $user->gouvernorat_nom=$request->gouvernorat_nom;
        $user->mobile = $request->phone;
        $user->address = $request->address;
        $user->save();
      //   if ($request->smail){
      //       $data = array('name'=>"Virat Gandhi");
     
      //   Mail::send(['text'=>'mail'], $data, function($message) {
      //      $message->to('elouraginirim@gmail.com','fghtyjg')->subject
      //         ('Coodoneés de Compte LIMASY');
      //      $message->from('elouraginirim@gmail.com','Virat Gandhi');
      //   });
      //   }
        return $pass;
    }




    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->nom = $request->name;
        $user->email = $request->email;
        $user->login = $request->username;
        $user->gouvernorat_nom=$request->gouvernorat_nom;
        $user->mobile = $request->phone;
        $user->address = $request->address;
        $user->save();
        return $user;
    }


    public function send_email($pass,$mail,$us) {
        $data = array('name'=>"Virat Gandhi");
     
        Mail::send(['text'=>'mail'], $data, function($message) {
           $message->to('elouraginirim@gmail.com', $pass)->subject
              ('Coodoneés de Compte LIMASY');
           $message->from('elouraginirim@gmail.com','Virat Gandhi');
        });
        echo "Basic Email Sent. Check your inbox.";
     }



     public function blockAdmin(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->is_blocked = $request->is_blocked;
        $user->update();
        return $user;
    }


}
