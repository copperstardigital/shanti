<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInfoBoxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('info_boxes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('en_color')->nullable();
            $table->string('en_icon')->nullable();
            $table->string('en_title')->nullable();
            $table->string('en_copy')->nullable();
            $table->string('en_link')->nullable();
            $table->string('es_color')->nullable();
            $table->string('es_icon')->nullable();
            $table->string('es_title')->nullable();
            $table->string('es_copy')->nullable();
            $table->string('es_link')->nullable();
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
        Schema::dropIfExists('info_boxes');
    }
}
