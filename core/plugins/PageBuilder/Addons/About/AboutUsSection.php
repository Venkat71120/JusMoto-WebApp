<?php


namespace plugins\PageBuilder\Addons\About;

use plugins\PageBuilder\Fields\ColorPicker;
use plugins\PageBuilder\Fields\Slider;
use plugins\PageBuilder\Fields\Switcher;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Fields\Textarea;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\Fields\Image;

class AboutUsSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'about/about_us_section.png';
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


        $output .= Textarea::get([
            'name' => 'description',
            'label' => __('Description'),
            'value' => $widget_saved_values['description'] ?? null,
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

        $output .= Image::get([
            'name' => 'badge_image',
            'label' => __('Upload Base Image'),
            'value' => $widget_saved_values['badge_image'] ?? null,
            'dimensions' => '648x519',
        ]);

        $output .= Text::get([
            'name' => 'satisfied_customer_number',
            'label' => __('Satisfied Customer Number'),
            'value' => $widget_saved_values['satisfied_customer_number'] ?? null,
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

        $badge_image = $settings['badge_image'];

        $title =$settings['title'] ?? '';
        $description=$settings['description'] ?? '';
        $repeater_data = $settings['feature_item_section'] ?? [];

        $satisfied_customer_number =$settings['satisfied_customer_number'] ?? '';
        $satisfied_customer_text =$settings['satisfied_customer_text'] ?? '';

        return $this->renderBlade('AboutPage.about-us-section',[
            'badge_image' => $badge_image,
            'title' => $title,
            'description' => $description,
            'satisfied_customer_number' => $satisfied_customer_number,
            'satisfied_customer_text' => $satisfied_customer_text,
            'repeater_data' => $repeater_data,
        ]);

    }

    public function addon_title()
    {
        return __('About Us Section');
    }
}
