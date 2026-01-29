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

class ChooseUsSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'home/choose_us_section.png';
    }

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();


        $output .= Image::get([
            'name' => 'central_car_image',
            'label' => __('Upload Central Car Image'),
            'value' => $widget_saved_values['central_car_image'] ?? null,
            'dimensions' => '220x470',
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
            'id' => 'why_choose_us_section',
            'max' => 4,
            'fields' => [
                [
                    'type' => RepeaterField::IMAGE,
                    'name' => 'why_choose_us_icon',
                    'label' => __('Icon'),
                    'value' => $widget_saved_values['why_choose_us_icon'] ?? null,
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'why_choose_us_title',
                    'label' => __('Title'),
                    'value' => $widget_saved_values['why_choose_us_title'] ?? null,
                ],
                [
                    'type' => RepeaterField::TEXTAREA,
                    'name' => 'why_choose_us_description',
                    'label' => __('Description'),
                    'value' => $widget_saved_values['why_choose_us_description'] ?? null,
                ],
            ]
        ]);


        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }


    public function frontend_render() : string
    {
        $settings = $this->get_settings();

        $central_car_image = $settings['central_car_image'];

        $title =$settings['title'] ?? '';
        $subtitle =$settings['subtitle'] ?? '';
        $repeater_data = $settings['why_choose_us_section'];

        // 🔹 Limit repeater data to only first 4 items
        if (is_array($repeater_data) && count($repeater_data) > 4) {
            $repeater_data = array_slice($repeater_data, 0, 4);
        }

        if (!empty($repeater_data['why_choose_us_icon_'])) {
            foreach ($repeater_data['why_choose_us_icon_'] as $key => $icon) {
                $repeater_data['why_choose_us_icon_'][$key] = $this->convertLAToFA($icon);
            }
        }

        return $this->renderBlade('HomePage.why-choose-us-section',[
            'central_car_image' => $central_car_image,
            'title' => $title,
            'subtitle' => $subtitle,
            'repeater_data' => $repeater_data
        ]);

    }


    public function addon_title()
    {
        return __('Why Choose Us Section');
    }

    private function convertLAToFA($icon)
    {
        $icon = trim($icon);

        if (str_starts_with($icon, 'lab ')) {
            $icon = str_replace('lab ', 'fa-brands ', $icon);
        } elseif (str_starts_with($icon, 'lar ')) {
            $icon = str_replace('lar ', 'fa-regular ', $icon);
        } elseif (str_starts_with($icon, 'las ')) {
            $icon = str_replace('las ', 'fa-solid ', $icon);
        } elseif (str_starts_with($icon, 'la ')) {
            $icon = str_replace('la ', 'fa-solid ', $icon);
        }

        // Now replace the icon name part (la- to fa-)
        $icon = str_replace('la-', 'fa-', $icon);

        return $icon;
    }
}
