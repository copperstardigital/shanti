<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TranslatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->renameColumn('headline', 'en_headline');
            $table->renameColumn('hero_text', 'en_hero_text');
            $table->renameColumn('body', 'en_body');
            $table->string('es_headline')->nullable()->after('body');
            $table->text('es_hero_text')->nullable()->after('es_headline');
            $table->text('es_body')->nullable()->after('es_hero_text');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->renameColumn('en_headline', 'headline');
            $table->renameColumn('en_hero_text', 'hero_text');
            $table->renameColumn('en_body', 'hero_text');
            $table->dropColumn('es_headline');
            $table->dropColumn('es_hero_text');
            $table->dropColumn('es_body');
        });
    }
}
