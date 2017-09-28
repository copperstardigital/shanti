<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TranslateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->renameColumn('event_name', 'en_event_name');
            $table->renameColumn('event_callout', 'en_event_callout');
            $table->renameColumn('event_description', 'en_event_description');
            $table->string('es_event_name')->nullable()->after('event_description');
            $table->text('es_event_callout')->nullable()->after('es_event_name');
            $table->text('es_event_description')->nullable()->after('es_event_callout');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function (Blueprint $table) {
            $table->renameColumn('en_event_name', 'event_name');
            $table->renameColumn('en_event_callout', 'event_callout');
            $table->renameColumn('en_event_description', 'event_description');
            $table->dropColumn('es_event_name');
            $table->dropColumn('es_event_callout');
            $table->dropColumn('es_event_description');
        });
    }
}
