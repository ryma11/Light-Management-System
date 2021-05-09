<?php

namespace App\Console\Commands;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
class Scenario1 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scenario:sc1';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Eteindre les lignes au lever de soleil et allumer les lignes au coucher de soleil ";

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        
 

            // $gouvernorats = DB::table('gouvernorats')->pluck('nom');
            // $latitude = DB::table('gouvernorats')->pluck('latitude');
            // $longitude = DB::table('gouvernorats')->pluck('longitude');
            $user_gouv = DB::table('users')->pluck('gouvernorat_nom');
           

foreach ($user_gouv as $u_g) {

    // recuperation de la latitude et du longitude d'un gouvernorat donné
    $latitude = DB::table('gouvernorats')->where('nom',$u_g)->pluck('latitude')->first();
    $longitude = DB::table('gouvernorats')->where('nom',$u_g)->pluck('longitude')->first();

// tester si c'est le sunrise ou le sunset dans ce gouvernorat
    if($this->sunAction($latitude,$longitude)>=time()){

        // recuperation de toutes les communes de ce gouvernorat
        $users=DB::table('users')->where('gouvernorat_nom',$u_g)->get();
        foreach($users as $user){
            // recuperation de toutes les niches de cette commune
            $niches=DB::table('niches')->where('user_id',$user)->get();
            foreach($niches as $niche){
                // recuperation de toutes les lignes de cette niche
                $lignes=DB::table('lignes')->where('niche_id',$niche)->get();
              foreach($lignes as $ligne){
                  // modification de l'etat de toutes les lignes de niche
                $lignes=DB::table('lignes')->where('id',$ligne->id)->update('etat',!$ligne->etat);
                // $lignes=DB::table('lignes')->update('etat',0);
              }
            }

        }

    }



}

    }
    public function sunAction( $lat, $lon){

// Definition des fonctions preedifinis en php date_sunrise et date_sunset
// date_sunrise(timestamp, format, latitude, longitude, zenith, gmtoffset)
// date_sunset(timestamp, format, latitude, longitude, zenith, gmtoffset)
         
        //recuperation de tepms de coucher et lever de soleil
        $lat=(float)($lat);
        $$lon=(float)($lon);
        $sunrise_time=date_sunrise(time(),SUNFUNCS_RET_STRING,$lat ,$lon);
        $sunset_time=date_sunset(time(),SUNFUNCS_RET_STRING,$lat ,$lon);

        //calculer le décalage de 30 minutes
       $sunrise30min = date('H:i', strtotime($sunrise_time.'-30 minutes'));
       $sunset30min = date('H:i', strtotime($sunset_time.'+30 minutes'));

        //date("H:i") retourne le temps actuel retarder d'une heure
        $time=date("H:i");
        // decaler le $time de 60 minutes
        $dateActuel=date('H:i', strtotime($time.'-60 minutes'));
        // si c'est le temps de coucher ou de lever de soleil donc etat est true sinon etat false (avant ou après 30 min)
       if($dateActuel>=$sunrise30min || $dateActuel>=$sunset30min ){ 
           $etat=true;
       }else{
        $etat=false;
       }
        return $etat;
    }
}
