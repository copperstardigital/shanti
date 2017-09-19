<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $guarded = ['id'];

    protected $primaryKey = 'slug';

    public $incrementing = false;

    protected $dates = ['expires_at'];

    public function category() {
        return $this->belongsTo(Category::class);
    }
}
