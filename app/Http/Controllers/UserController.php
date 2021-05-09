<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
 use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Auth;
use Cookie;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
class UserController extends Controller
{
    use HasApiTokens,Notifiable,AuthenticatesUsers;
    public function __construct()
    {
        $this->middleware('auth.api', ['except' => ['login']]);
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
        $user = new User();
        $pass=Str::random(8);
        $user->password= Hash::make($pass);
        $user->nom = $request->name;
        $user->email = $request->email;
        $user->login = $request->username;
        $user->gouvernorat_nom=$request->gouvernorat_nom;
        $user->mobile = $request->phone;
        $user->address = $request->address;
        $user->save();
        return $user;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function login(Request $request)
    {
        if(!Auth::attempt(['login' => $request->log, 'password' => $request->password])){
            return response()->json(['error' => 'Unauthorized'], 401);

        } else { 
         $user=Auth::user();
         if ($user->role ==0){
            $tokenData = $user->createToken('Personal Access Token', ['do_anything']);
         }else{
            $tokenData = $user->createToken('Personal Access Token', ['can_create']);
         }
         $token=$tokenData->accessToken;
        $cookie = $this->getCookieDetails($token);
            return response()
                ->json([
                    'logged_in_user' => $user,
                    'token' => $token,
                ], 200)
                ->cookie($cookie['name'], $cookie['value'], $cookie['minutes'], $cookie['path'], $cookie['domain'], $cookie['secure'], $cookie['httponly'], $cookie['samesite']);
       
            return response()->json(
                ['error' => 'invalid-credentials'], 422);
        }
    }
        private function getCookieDetails($token)
        {
            return [
                'name' => '_token',
                'value' => $token,
                'minutes' => 1440,
                'path' => null,
                'domain' => null,
                // 'secure' => true, // for production
                'secure' => null, // for localhost
                'httponly' => true,
                'samesite' => true,
            ];
        }
    
        
        
      
    

 
    public function logout(Request $request)
    {
       if(  Auth::guard()->user()->token()->revoke()){ 
        $cookie = Cookie::forget('_token');
        return response()->json([
            'message' => 'successful-logout'
        ])->withCookie($cookie);
        }
    else{
        return response()->json(['error' => 'doesnt logged out']);
    }
    }

}
