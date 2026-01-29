<?php

namespace Modules\Blog\app\Services;


use App\Actions\Media\MediaHelper;
use App\Mail\BasicMail;
use App\Models\Backend\AdminNotification;
use App\Models\Backend\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Modules\Blog\app\Models\BlogPost;


class BlogsService
{

    public static function handleBlogPage(Request $request,$slug){
        // Check if the user is authenticated and if user provider then give all service except his services
        $blogs = BlogPost::where('status', 1);

        // Filter by category
        if ($request->filled('category')) {
            $categorySlug = $request->category;

            $blogs->whereHas('category', function($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }

        // Filter by search
        if ($request->filled('search')) {
            $blogs->where('title', 'like', '%' . $request->search . '%');
        }

        if ($request->filled('tag')) {
            $blogs->where('tag_name', 'like', '%' . $request->tag . '%');
        }

        $blogs = $blogs->latest()->paginate(6)->withQueryString();

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

        //popular tag
        $tags = BlogPost::where('status', 1)
            ->selectRaw('tag_name, COUNT(*) as count')
            ->groupBy('tag_name')
            ->orderBy('count', 'desc')
            ->take(5)
            ->get();

        // Normal page load → return full page
        return view('blog::frontend.BlogPage.blog-list', compact('blogs','categories','tags'));
    }



}
