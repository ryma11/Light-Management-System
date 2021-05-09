<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class GouvernoratsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    DB::table('gouvernorats')->insert([

[
    'nom' =>'Tunis', 
    "latitude" => "36.8008", 
    "longitude"=> "10.1800", 
  
   

],[
    'nom' =>"Sfax", 
    "latitude" => "34.7500", 
    "longitude"=> "10.7200", 
  
   

],
[
    'nom' =>"Sousse", 
    "latitude" => "35.8300", 
    "longitude"=> "10.6250", 
],
[
    'nom' =>"Gabes", 
    "latitude" => "33.9004", 
    "longitude"=> "10.1000", 
  
],
[
    'nom' =>"Kairouan", 
    "latitude" => "35.6804", 
    "longitude"=> "10.1000", 
],
[
    'nom' =>"Bizerte", 
    "latitude" => "37.2904", 
    "longitude"=> "9.8550", 
],
[
    'nom' =>"Gafsa", 
    "latitude" => "34.4204", 
    "longitude"=> "8.7800", 
],
[
    'nom' =>"Nabeul", 
    "latitude" => "36.4603", 
    "longitude"=> "10.7300", 
],
[
    'nom' =>"Ariana", 
    "latitude" => "36.8667", 
    "longitude"=> "10.2000", 
],
[
    'nom' =>"Kasserine", 
    "latitude" => "35.1804", 
    "longitude"=> "8.8300", 
],
[
    'nom' =>"Monastir", 
    "latitude" => "35.7307", 
    "longitude"=> "10.7673", 
],

[
    'nom' =>"Tataouine", 
    "latitude" => "33.0000", 
    "longitude"=> "10.4667", 
],
[
    'nom' =>"Medenine", 
    "latitude" => "33.4000", 
    "longitude"=> "10.4167", 
],
[
    'nom' =>"Beja", 
    "latitude" => "36.7304", 
    "longitude"=> "9.1900", 
],
[
    'nom' =>"Jendouba", 
    "latitude" => "36.5000", 
    "longitude"=> "8.7500", 
],
[
    'nom' =>"El Kef", 
    "latitude" => "36.1826", 
    "longitude"=> "8.7148", 
],
[
    'nom' =>"Mahdia", 
    "latitude" => "35.4839", 
    "longitude"=> "11.0409", 
],
[
    'nom' =>"Sidi Bouzid", 
    "latitude" => "35.0167", 
    "longitude"=> "9.5000", 
],
[
    'nom' =>"Tozeur", 
    "latitude" => "33.9304", 
    "longitude"=> "8.1300", 
],
[
    'nom' =>"Siliana", 
    "latitude" => "36.0833", 
    "longitude"=> "9.3833", 
],
[
    'nom' =>"Kebili", 
    "latitude" => "33.6900", 
    "longitude"=> "8.9710", 
],
[
    'nom' =>"Zaghouan", 
    "latitude" => "36.4000", 
    "longitude"=> "10.1470", 
],
[
    'nom' =>"Ben Arous", 
    "latitude" => "36.7545", 
    "longitude"=> "10.2217", 
],[
    'nom' =>"Manouba", 
    "latitude" => "36.8101", 
    "longitude"=> "10.0956", 
]


    ]);
    }
}
