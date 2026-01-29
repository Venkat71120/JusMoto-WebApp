<?php

namespace Modules\Blog\app\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\Blog\app\Models\BlogPost;

class BlogController extends Controller
{
    //blog details
    public function blogDetails($slug)
    {
        $blog = BlogPost::where('slug', $slug)->first();
        if(is_null($blog))
        {
            return redirect()->back();
        }
        $blog->increment('views');

        // Categories
        $categorie_ids = BlogPost::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->pluck('category_id');

        $categories = Category::where('status', 1)
            ->whereIn('id', $categorie_ids)
            ->withCount(['blogs' => function($q) {
                $q->where('status', 1);
            }])
            ->orderBy('created_at', 'desc')
            ->get();

        $recent_posts= $this->recentBlogs($blog->id);

        //popular tag
        $tags = BlogPost::where('status', 1)
            ->where('id', '!=', $blog->id)
            ->selectRaw('tag_name, COUNT(*) as count')
            ->groupBy('tag_name')
            ->orderBy('count', 'desc')
            ->take(7)
            ->get();

        return view('blog::frontend.BlogPage.blog-details', compact('blog','categories','recent_posts','tags'));
    }

    public function recentBlogs($id)
    {
        $blogs = BlogPost::where('status', 1)
            ->where('id', '!=', $id)
            ->latest()
            ->take(4)
            ->get();

        return $blogs;
    }

}
