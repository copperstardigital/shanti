<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeFieldNamesInInfoBoxes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('info_boxes', function (Blueprint $table) {
            $table->renameColumn('en_color', 'color');
            $table->renameColumn('en_icon', 'icon');
            $table->renameColumn('en_link', 'link');
            $table->dropColumn('es_color');
            $table->dropColumn('es_icon');
            $table->dropColumn('es_link');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('info_boxes', function (Blueprint $table) {
            $table->renameColumn('color', 'en_color');
            $table->renameColumn('icon', 'en_icon');
            $table->renameColumn('link', 'en_link');
            $table->string('es_color');
            $table->string('es_icon');
            $table->string('es_link');
        });
    }
}
