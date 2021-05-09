<?php

namespace App;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Niche extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'nom','gsm','map','adresse','nombre_lignes','puissance_moyenne'

    ];
    protected $dates=['deleted_at'];


   // protected $table="niches";

    public function lignes(){
        return $this->hasMany('App\Ligne');
    }
    public function user(){
        return $this->belongsTo('App\User');

    }
    // public function interventions(){
    //     return $this->belongsToMany('App\Intervention','interventions');
    // } 

}
