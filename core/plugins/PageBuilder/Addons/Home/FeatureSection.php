<?php

namespace plugins\PageBuilder\Addons\Home;

use App\Models\Backend\Category;
use App\Models\Service;
use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class FeatureSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'home/feature_section.png';
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

        $output .= Text::get([
            'name' => 'subtitle',
            'label' => __('Subtitle'),
            'value' => $widget_saved_values['subtitle'] ?? null,
        ]);


        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'feature_item_section',
            'fields' => [
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'feature_item',
                    'label' => __('Feature Item')
                ],
            ]
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

        $output .= Image::get([
            'name' => 'about_image',
            'label' => __('Upload About Image'),
            'value' => $widget_saved_values['about_image'] ?? null,
            'dimensions' => '1905x820',
        ]);

        $output .= Text::get([
            'name' => 'satisfied_customer_count',
            'label' => __('Satisfied Customer Number'),
            'value' => $widget_saved_values['satisfied_customer_count'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'satisfied_customer_text',
            'label' => __('Satisfied Customer Text'),
            'value' => $widget_saved_values['satisfied_customer_text'] ?? null,
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
        $subtitle =$settings['subtitle'] ?? '';
        $repeater_data = $settings['feature_item_section'];
        $button_title_one = $settings['button_title_one'] ?? '';
        $button_link_one = $settings['button_link_one'] ?? '';
        $about_image = $settings['about_image'];
        $satisfied_customer_count =$settings['satisfied_customer_count'] ?? '';
        $satisfied_customer_text =$settings['satisfied_customer_text'] ?? '';


        return $this->renderBlade('HomePage.feature-section',[
            'background_image' => $background_image,
            'title' => $title,
            'subtitle' => $subtitle,
            'repeater_data' => $repeater_data,
            'button_title_one' => $button_title_one,
            'button_link_one' => $button_link_one,
            'about_image' => $about_image,
            'satisfied_customer_count' => $satisfied_customer_count,
            'satisfied_customer_text' => $satisfied_customer_text

        ]);

    }


    public function addon_title()
    {
        return __('Feature Section');
    }
}
