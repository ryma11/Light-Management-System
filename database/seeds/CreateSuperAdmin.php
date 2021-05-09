<?php

use Illuminate\Database\Seeder;

class CreateSuperAdmin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(

            [
                'nom' =>'super', 
                "email" => "superad@gmail.com", 
                "login"=> "superadmin", 
                'password' =>'$2y$10$T7HI86YaW6cDvxSKxb/TSeDlhoLGFgVC9Yz/MsnARYXKVyGWx8VjO', // equal to 12345678
                "mobile" => "97227342", 
                "address"=> "sousse 4060", 
                'role' =>'1', 
              
            ]);
    }
}
