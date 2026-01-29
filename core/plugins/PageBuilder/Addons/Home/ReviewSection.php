<?php

namespace plugins\PageBuilder\Addons\Home;

use App\Models\Review;
use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class ReviewSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'home/review_section.png';
    }

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();


        $output .= Image::get([
            'name' => 'background_image',
            'label' => __('Upload Background Image'),
            'value' => $widget_saved_values['background_image'] ?? null,
            'dimensions' => '1905x820',
        ]);

        $output .= Text::get([
            'name' => 'title',
            'label' => __('Title'),
            'value' => $widget_saved_values['title'] ?? null,
        ]);

        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'trusted_user_section',
            'fields' => [
                [
                    'type' => RepeaterField::IMAGE,
                    'name' => 'trusted_user_image',
                    'label' => __('Trusted User Image'),
                ]
            ]
        ]);
        $output .= Text::get([
            'name' => 'trusted_text',
            'label' =>  __('Trusted By Text'),
            'value' => $widget_saved_values['trusted_text'] ?? 'Trusted by 1200+',
            'info' => __('Enter the text to show in the trusted section, e.g., "Trusted by 1200+"'),
        ]);


        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }


    public function frontend_render() : string
    {
        $settings = $this->get_settings();

        $background_image = $settings['background_image'];

        $title =$settings['title'] ?? '';
        $repeater_data_trusted_user = $settings['trusted_user_section'];
        $trusted_text =$settings['trusted_text'] ?? '';

        $all_reviews = $this->allReviews();

        return $this->renderBlade('HomePage.review-section',[
            'background_image' => $background_image,
            'repeater_data_trusted_user' => $repeater_data_trusted_user,
            'trusted_text' => $trusted_text,
            'title' => $title,
            'all_reviews' => $all_reviews,
        ]);

    }

    public function allReviews()
    {
        $all_reviews = Review::where('status','published')
            ->with(['service', 'reviewer','reviewer.userServiceCategory.category'])
            ->orderBy('created_at', 'desc')
            ->get();


        return $all_reviews;
    }

    public function addon_title()
    {
        return __('Review Section');
    }
}
