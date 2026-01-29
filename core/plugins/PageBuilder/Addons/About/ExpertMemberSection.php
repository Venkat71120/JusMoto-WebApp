<?php

namespace plugins\PageBuilder\Addons\About;

use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Fields\Textarea;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class ExpertMemberSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'about/expert_member_section.png';
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

        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'expert_member_section',
            'fields' => [
                [
                    'type' => RepeaterField::IMAGE,
                    'name' => 'expert_member_image',
                    'label' => __('Expert Member Image'),
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'expert_member_name',
                    'label' => __('Expert Member Name')
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'expert_member_designation',
                    'label' => __('Expert Member Designation')
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

        $title =$settings['title'] ?? '';
        $repeater_data = $settings['expert_member_section'] ?? [];


        return $this->renderBlade('AboutPage.expert-member-section',[
            'title' => $title,
            'repeater_data' => $repeater_data,
        ]);

    }

    public function addon_title()
    {
        return __('Our Expert Member Section');
    }
}
