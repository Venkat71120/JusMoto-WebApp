<?php

namespace plugins\PageBuilder\Addons\Home;

use Modules\Blog\app\Models\BlogPost;
use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class BlogSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'home/recent_blog_section.png';
    }

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();



        $output .= Text::get([
            'name' => 'title',
            'label' => __('Title'),
            'value' => $widget_saved_values['title'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'button_title_one',
            'label' => __('Button Title One'),
            'value' => $widget_saved_values['button_title_one'] ?? null,
            'info' => __('add button title one')
        ]);
        $output .= Text::get([
            'name' => 'button_link_one',
            'label' => __('Button Link one'),
            'value' => $widget_saved_values['button_link_one'] ?? null,
            'info' => __('add button link one')
        ]);


        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }


    public function frontend_render() : string
    {
        $settings = $this->get_settings();


        $title =$settings['title'] ?? '';
        $button_title_one = $settings['button_title_one'] ?? '';
        $button_link_one = $settings['button_link_one'] ?? '';

        $recent_blogs = $this->recentBlogs();

        return $this->renderBlade('HomePage.recent-blog-section',[
            'title' => $title,
            'button_title_one' => $button_title_one,
            'button_link_one' => $button_link_one,
            'recent_blogs' => $recent_blogs,
        ]);

    }

    public function recentBlogs()
    {
        $recent_blogs = BlogPost::with('category')
            ->where('status', 1)
            ->latest()
            ->take(3)
            ->get();

        return $recent_blogs;
    }

    public function addon_title()
    {
        return __('Recent Blog Section');
    }
}
