<?php

namespace App\Http\Controllers\Vue;

use App\Models\Article;
use App\Models\Event;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    public function search() {
        $keywords = request()->query('keywords');

        $articles = Article::where('en_headline', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_subhead', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_callout', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_body', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_headline', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_subhead', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_callout', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_body', 'LIKE', '%' . $keywords . '%')
            ->get();

        $posts = Post::where('en_headline', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_hero_text', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_body', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_headline', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_body', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_hero_text', 'LIKE', '%' . $keywords . '%')
            ->get();

        $events = Event::where('en_event_name', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_event_callout', 'LIKE', '%' . $keywords . '%')
            ->orWhere('en_event_description', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_event_name', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_event_description', 'LIKE', '%' . $keywords . '%')
            ->orWhere('es_event_callout', 'LIKE', '%' . $keywords . '%')
            ->get();

        return response()->json([
            'articles' => $articles,
            'posts' => $posts,
            'events' => $events
        ]);
    }
}
