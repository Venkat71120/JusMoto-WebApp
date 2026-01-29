<?php

namespace Modules\Blog\app\Models;

use App\Models\Backend\Admin;
use App\Models\Backend\Category;
use App\Models\Backend\MetaData;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Blog\Database\factories\BlogPostFactory;

class BlogPost extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'category_id',
        'admin_id',
        'title',
        'slug',
        'content',
        'image',
        'status',
        'views',
        'tag_name'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id', 'id');
    }

    public function metaData(){
        return $this->morphOne(MetaData::class,'meta_taggable');
    }

}
