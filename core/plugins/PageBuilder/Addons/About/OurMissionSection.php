<?php

namespace plugins\PageBuilder\Addons\About;

use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Fields\Textarea;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class OurMissionSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'about/mission_vision_section.png';
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
            'dimensions' => '1905x1034',
        ]);

        $output .= Text::get([
            'name' => 'mission_title',
            'label' => __('Mission Title'),
            'value' => $widget_saved_values['mission_title'] ?? null,
        ]);


        $output .= Textarea::get([
            'name' => 'mission_description',
            'label' => __('Mission Description'),
            'value' => $widget_saved_values['mission_description'] ?? null,
        ]);

        $output .= Image::get([
            'name' => 'mission_image',
            'label' => __('Upload Mission Image'),
            'value' => $widget_saved_values['mission_image'] ?? null,
            'dimensions' => '648x397',
        ]);

        $output .= Text::get([
            'name' => 'vision_title',
            'label' => __('Vision Title'),
            'value' => $widget_saved_values['vision_title'] ?? null,
        ]);


        $output .= Textarea::get([
            'name' => 'vision_description',
            'label' => __('Vision Description'),
            'value' => $widget_saved_values['vision_description'] ?? null,
        ]);

        $output .= Image::get([
            'name' => 'vision_image',
            'label' => __('Upload Vision Image'),
            'value' => $widget_saved_values['vision_image'] ?? null,
            'dimensions' => '648x397',
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
        $mission_image = $settings['mission_image'];
        $mission_title =$settings['mission_title'] ?? '';
        $mission_description=$settings['mission_description'] ?? '';
        $vision_image = $settings['vision_image'];
        $vision_title =$settings['vision_title'] ?? '';
        $vision_description=$settings['vision_description'] ?? '';

        return $this->renderBlade('AboutPage.ourmission-section',[
            'background_image' => $background_image,
           'mission_image' => $mission_image,
            'mission_title' => $mission_title,
            'mission_description' => $mission_description,
            'vision_image' => $vision_image,
            'vision_title' => $vision_title,
            'vision_description' => $vision_description,
        ]);

    }

    public function addon_title()
    {
        return __('Our Mission Vision Section');
    }
}
