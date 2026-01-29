<?php

namespace plugins\PageBuilder\Addons\Home;

use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Fields\Textarea;
use plugins\PageBuilder\Fields\Video;
use plugins\PageBuilder\PageBuilderBase;

class ReadyToGetServiceSection extends PageBuilderBase
{
    public function preview_image()
    {
//        return 'home/ready-to-get-service.png';
    }

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();

        $output .= Text::get([
            'name' => 'section_title',
            'label' => __('Section Title'),
            'value' => $widget_saved_values['section_title'] ?? null,
        ]);

        $output .= Textarea::get([
            'name' => 'section_description',
            'label' => __('Section Description'),
            'value' => $widget_saved_values['section_description'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'button_text',
            'label' => __('Button Text'),
            'value' => $widget_saved_values['button_text'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'button_url',
            'label' => __('Button URL'),
            'value' => $widget_saved_values['button_url'] ?? null,
        ]);

        $output .= Video::get([
            'name' => 'service_video',
            'label' => __('Service Video'),
            'value' => $widget_saved_values['service_video'] ?? null,
            'info' => __('Upload your service video (MP4, WebM, MOV, or AVI)'),
        ]);

        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }

    public function frontend_render(): string
    {
        $settings = $this->get_settings();

        $section_title = $settings['section_title'] ?? '';
        $section_description = $settings['section_description'] ?? '';
        $button_text = $settings['button_text'] ?? '';
        $button_url = $settings['button_url'] ?? '';
        $service_video = $settings['service_video'] ?? '';

        // Get video data
        $video_data = !empty($service_video) ? get_attachment_video_by_filename($service_video) : [];

        return $this->renderBlade('HomePage.ready-to-get-service', [
            'section_title' => $section_title,
            'section_description' => $section_description,
            'button_text' => $button_text,
            'button_url' => $button_url,
            'video_url' => $video_data['video_url'] ?? '',
            'has_video' => !empty($video_data['video_url']),
        ]);
    }

    public function addon_title()
    {
        return __('Ready To Get Service Section');
    }
}
