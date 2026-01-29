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

class AchivementSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'about/achivement_section.png';
    }

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();

        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'achivement_item_section',
            'fields' => [
                [
                    'type' => RepeaterField::IMAGE,
                    'name' => 'achivement_item_image',
                    'label' => __('Achivement Item Image'),
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'achivement_item_number',
                    'label' => __('Achivement Item Number')
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'achivement_item_title',
                    'label' => __('Achivement Item Title')
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

        $repeater_data = $settings['achivement_item_section'] ?? [];

        return $this->renderBlade('AboutPage.achivement-section',[
            'repeater_data' => $repeater_data,
        ]);

    }

    public function addon_title()
    {
        return __('Achivement Section');
    }
}
