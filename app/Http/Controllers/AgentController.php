<?php

namespace App\Http\Controllers;

use App\Agent;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AgentController extends Controller
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
        if( $agent=Auth::user()){ 
       
            return Agent::where('user_id',$agent->id)->paginate(5);
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
        $agent = new Agent();
        $pass=Str::random(8);
        $user=Auth::user();
        $agent->user_id=$user->id;
        $agent->last_name = $request->last_name;
        $agent->first_name = $request->first_name;
        $agent->email = $request->email;
        $agent->username = $request->username;
        $agent->birthday = $request->birthday;
        $agent->password= Hash::make($pass);
        $agent->phone = $request->phone;
        $agent->address = $request->address;
        $agent->save();
        return $pass;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $agent = Agent::findOrFail($id);
        $agent->last_name = $request->last_name;
        $agent->first_name = $request->first_name;
        $agent->email = $request->email;
        $agent->username = $request->username;
        $agent->birthday = $request->birthday;
        $agent->phone = $request->phone;
        $agent->address = $request->address;
        $agent->save();
        return $agent;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $agent = Agent::findOrFail($id);
        $agent->delete();
        //
    }

    public function blockAgent(Request $request, $id)
    {
        $agent = Agent::findOrFail($id);
        $agent->is_blocked = $request->is_blocked;
        $agent->update();
        return $agent;
    }
    // public function login(Request $request)
    // {
    //     // $request->validate([
    //     //     'email' => ['required', 'email'],
    //     //     'password' => ['required']
    //     // ]);
    //     //     return response()->json(Auth::user(), 200);
    //     // $data = $request->input();
    //     // if (Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
    //     //     return Auth::agent();
    //     // }
    //     if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
    //         return response()->json(Auth::user(), 200);
    //     } else {
    //         return response()->json(['error' => 'Could not login'], 401);
    //     }
    // }
    // public function logout()
    // {
    //     Auth::logout();
    // }
}
