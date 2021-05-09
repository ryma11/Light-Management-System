<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNichesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */ 
    public function up()
    {
        Schema::create('niches', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('gsm');
            $table->string('map');
            $table->string('adresse');
            $table->integer('nombre_lignes')->default(0);
            $table->float('puissance_moyenne')->default(0);
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('niches');
    }
}
