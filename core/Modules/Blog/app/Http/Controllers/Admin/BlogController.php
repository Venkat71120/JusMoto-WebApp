<?php

namespace Modules\Blog\app\Http\Controllers\Admin;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Modules\Blog\app\Models\BlogPost;

class BlogController extends Controller
{
    public function all_blog()
    {
        $all_blogs = BlogPost::with('category')->latest()->paginate(10);
        return view('blog::backend.all-blog',compact('all_blogs'));
    }

    public function create()
    {
        $categories = Category::where('status', 1)
            ->get()
            ->unique('name')
            ->values();

        return view('blog::backend.create',compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:blog_posts',
            'blog_content' => 'required',
            'category' => 'required',
            'status' => 'required',
            'tag_name' => 'nullable|max:255',
        ]);

        if(empty($request->image)){
            return redirect()->back()->with(FlashMsg::item_delete('Blog image is required'));
        }
        $slug = !empty($request->slug) ? $request->slug : $request->title;
        $blog = new BlogPost();

        $blog->title = $request->title;
        $blog->content =  $request->blog_content;
        $slug =$request->filled('slug') ? $request->slug : $request->title;
        $status=0;
        if(!empty($request->status) && $request->status === 'publish'){
            $status = 1;
        }

        $blog->slug = purify_html($slug);
        $blog->status = $status;
        $blog->category_id = $request->category;
        $blog->admin_id = Auth::guard('admin')->user()->id;
        $blog->image = $request->image;
        $blog->tag_name = $request->tag_name;

        $Metas = [
            'meta_title' => purify_html($request->title),
            'meta_tags' => purify_html($request->tag_name),
            'meta_description' => substr(strip_tags(purify_html($request->blog_content)), 0, 100),
            'facebook_meta_tags' => purify_html($request->tag_name),
            'facebook_meta_description' => substr(strip_tags(purify_html($request->blog_content)), 0, 100),
            'facebook_meta_image' => $request->image,
            'twitter_meta_tags' => purify_html($request->tag_name),
            'twitter_meta_description' => substr(strip_tags(purify_html($request->blog_content)), 0, 100),
            'twitter_meta_image' => $request->image,
        ];

        $blog->save();
        $blog->metaData()->create($Metas);
        return redirect()->back()->with(FlashMsg::item_new('Blog Post Successfully Created'));
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $blog = BlogPost::where('id',$id)->first();
        $categories = Category::where('status', 1)->get();
        return view('blog::backend.edit',compact('blog','categories'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|unique:blog_posts,title,'.$id,
            'blog_content' => 'required',
            'category' => 'required',
            'status' => 'required',
            'tag_name' => 'nullable|max:255',
        ]);

        $slug = !empty($request->slug) ? $request->slug : $request->title;
        $blog = BlogPost::find($id);
        $blog->title = $request->title;
        $slug =$request->filled('slug') ? $request->slug : $request->title;
        $blog->slug = $slug;
        $blog->content =  $request->blog_content;
        $status=0;
        if(!empty($request->status) && $request->status === 'publish'){
            $status = 1;
        }
        $blog->status = $status;
        $blog->category_id = $request->category;
        $blog->admin_id = $blog->admin_id;
        $blog->image = $request->image;
        $blog->tag_name = $request->tag_name;

        $Metas = [
            'meta_title' => purify_html($request->title),
            'meta_tags' => purify_html($request->tag_name),
            'meta_description' => substr(strip_tags(purify_html($request->blog_content)), 0, 100),
            'facebook_meta_tags' => purify_html($request->tag_name),
            'facebook_meta_description' => substr(strip_tags(purify_html($request->blog_content)), 0, 100),
            'facebook_meta_image' => $request->image,
            'twitter_meta_tags' => purify_html($request->tag_name),
            'twitter_meta_description' => substr(strip_tags(purify_html($request->blog_content)), 0, 100),
            'twitter_meta_image' => $request->image,
        ];

        $blog->save();
        $blog->metaData()->update($Metas);
        return redirect()->back()->with(FlashMsg::item_new('Blog Post Successfully Updated'));

    }

    public function destroy($id)
    {
        $blog = BlogPost::find($id);
        $blog?->metaData?->delete();
        $blog->delete();
        return redirect()->back()->with(FlashMsg::item_delete('Blog Post Successfully Deleted'));

    }

    // pagination
    function pagination(Request $request)
    {
        if($request->ajax()){

            $all_blogs = BlogPost::latest()->paginate(10);

            return view('blog::backend.search-result', compact('all_blogs'))->render();
        }
    }

    // search blog
    public function search_blog(Request $request)
    {
        $all_blogs = BlogPost::where('title', 'LIKE', "%". strip_tags($request->string_search) ."%")->paginate(10);
        return $all_blogs->total() >= 1 ? view('blog::backend.search-result', compact('all_blogs'))->render() : response()->json(['status'=>__('nothing')]);
    }
}
