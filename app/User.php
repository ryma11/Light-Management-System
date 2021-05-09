<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
// use Tymon\JWTAuth\Contracts\JWTSubject;

use App\Niche;

class User extends Authenticatable 
{
    use Notifiable;
    use SoftDeletes;
    use HasApiTokens;


   










    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    
    protected $dates=['deleted_at'];
    protected $fillable = [
        'name', 'email', 'password',
    ];
    public function niches(){
        return $this->hasMany('App\Niche');
    }
    public function gouvernaorat(){
        return $this->belongsTo('App\Gouvernorat');
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
