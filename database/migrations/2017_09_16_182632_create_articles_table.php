<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('en_headline')->nullable();
            $table->string('en_subhead')->nullable();
            $table->string('en_callout')->nullable();
            $table->text('en_body')->nullable();
            $table->string('es_headline')->nullable();
            $table->string('es_subhead')->nullable();
            $table->string('es_callout')->nullable();
            $table->text('es_body')->nullable();
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
        Schema::dropIfExists('articles');
    }
}
