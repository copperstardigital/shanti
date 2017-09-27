<?php

namespace App\Http\Controllers\Vue;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param null $footer
     * @return \Illuminate\Http\Response
     */
    public function index($footer = null)
    {
        if (!empty($footer)) {
            $posts = Post::where('expires_at', '>', Carbon::now())->latest()->take(5)->get();
        } else {
            $posts = Post::with('category')->where('expires_at', '>', Carbon::now())->latest()->get();
        }

        return response()->json(['posts' => $posts]);

    }

    public function carousel()
    {
        $events = Post::with('category')->where('category_id', 2)->latest()->take(5)->get();
        return response()->json(['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::with('category')->find($slug);
        return response()->json(['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
