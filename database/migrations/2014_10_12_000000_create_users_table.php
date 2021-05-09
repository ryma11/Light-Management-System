<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('email');
            $table->string('login')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('date de naissance')->nullable();
            $table->boolean('is_blocked')->default(0);
            $table->string('password');
            $table->string('mobile');
            $table->string('address');
            $table->string('remember_token')->nullable(); 
            $table->string('gouvernorat_nom')->nullable();
            $table->boolean('role')->default(0);
            $table->string('api_token', 80)->unique()->nullable()->default(null);
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
        Schema::dropIfExists('users');
    }
}
