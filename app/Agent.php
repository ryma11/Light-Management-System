<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agent extends Model
{   use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $fillable = [
        'last_name', 'first_name', 'email', 'username', 'birthday', 'password', 'phone', 'address'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
}
