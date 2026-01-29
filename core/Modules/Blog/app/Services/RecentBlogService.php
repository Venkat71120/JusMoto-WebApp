<?php

namespace Modules\Blog\app\Services;

use Modules\Blog\app\Models\BlogPost;

class RecentBlogService
{
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
