<?php

namespace plugins\WidgetsBuilder\Widgets;
use App\Language;
use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Textarea;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;
use plugins\WidgetsBuilder\WidgetBase;
use plugins\PageBuilder\Fields\IconPicker;
use plugins\PageBuilder\Fields\Text;

class FeatureWidget extends WidgetBase
{

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();

        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'feature_widget',
            'fields' => [
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'feature_field',
                    'label' => __('Feature Field')
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'feature_field_url',
                    'label' => __('Feature Field Url')
                ],


            ]
        ]);

        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }

    public function frontend_render()
    {
        $settings = $this->get_settings();

        $repeater_data = $settings['feature_widget'];
        $features=__('Features');

        // Start HTML
        $html  = '<div class="col-lg-2 col-md-6">';
        $html .= '    <div class="footer-widget widget">';
        $html .= '        <h4 class="widget-title subtitle-2 fw_semibold">' . e($features) . '</h4>';
        $html .= '        <ul class="custom-ul footer-link-list">';

        // Loop through repeater data
        if (!empty($repeater_data['feature_field_'])) {
            foreach ($repeater_data['feature_field_'] as $key => $field) {
                $url = $repeater_data['feature_field_url_'][$key] ?? '#';
                $html .= '            <li class="footer-link-item">';
                $html .= '                <a href="' . e($url) . '">' . e($field) . '</a>';
                $html .= '            </li>';
            }
        }

        // Close tags
        $html .= '        </ul>';
        $html .= '    </div>';
        $html .= '</div>';


        return $html;

    }

    public function widget_title()
    {
        return __('Feature Fields');
    }

}
