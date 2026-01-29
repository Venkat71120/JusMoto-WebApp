<?php

namespace plugins\PageBuilder\Addons\Home;

use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;
use plugins\PageBuilder\Traits\RenderViewString;

class HeroSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'home/hero_section.png';
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

        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'feature_section',
            'fields' => [
                [
                    'type' => RepeaterField::ICON_PICKER,
                    'name' => 'feature_icon',
                    'label' => __('Icon Image'),
                    'value' => $widget_saved_values['feature_icon'] ?? null,
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'feature_title',
                    'label' => __('Feature Title')
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'feature_description',
                    'label' => __('Feature Description')
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

        $background_image = $settings['background_image'];

        $title =$settings['title'] ?? '';
        $subtitle =$settings['subtitle'] ?? '';
        $button_title_one = $settings['button_title_one'] ?? '';
        $button_link_one = $settings['button_link_one'] ?? '';
        $repeater_data_trusted_user = $settings['trusted_user_section'];
        $trusted_text =$settings['trusted_text'] ?? '';

        $repeater_data = $settings['feature_section'];

        if (!empty($repeater_data['feature_icon_'])) {
            foreach ($repeater_data['feature_icon_'] as $key => $icon) {
                $repeater_data['feature_icon_'][$key] = $this->convertLAToFA($icon);
            }
        }


        return $this->renderBlade('HomePage.hero-section',[
            'background_image' => $background_image,
            'title' => $title,
            'subtitle' => $subtitle,
            'button_title_one' => $button_title_one,
            'button_link_one' => $button_link_one,
            'repeater_data_trusted_user' => $repeater_data_trusted_user,
            'trusted_text' => $trusted_text,
            'repeater_data' => $repeater_data,
        ]);

    }

    public function addon_title()
    {
        return __('Hero Section');
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
