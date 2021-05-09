<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Ligne extends Model
{
    use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $guarded=[];
    protected $fillable = [
    'nombre_point_limineux','puissance_moyenne','etat'];

   //
   
   

    public function niche(){
        return $this->belongsTo('App\Niche');
    }
    // public function interventions(){
    //     return $this->belongsToMany('App\Intervention','interventions');
    // } 

}
