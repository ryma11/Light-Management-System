<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Intervention extends Model
{
    //
    protected $guarded=[];
    protected $fillable = [
        'type','ligne_id','niche_id'];
       
    
}
