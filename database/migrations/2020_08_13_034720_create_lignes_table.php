<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLignesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lignes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('nombre_point_limineux')->default(0);
            $table->float('puissance_moyenne')->default(0);
            $table->boolean('etat')->default(0);
            $table->bigInteger('niche_id')->unsigned()->nullable();
            $table->softDeletes();
            $table->timestamps();
      //  $table->foreign('niche_id')->references('id')->on('Niche');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lignes');
    }
}
