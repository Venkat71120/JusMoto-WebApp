<?php

namespace plugins\PageBuilder\Addons\Home;

use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class AppVersionSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'home/app_version_section.png';
    }

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();

        $output .= Image::get([
            'name' => 'client_app_image',
            'label' => __('Upload Client App Image'),
            'value' => $widget_saved_values['client_app_image'] ?? null,
            'dimensions' => '243x187',
        ]);

        $output .= Image::get([
            'name' => 'background_image',
            'label' => __('Upload Background Image'),
            'value' => $widget_saved_values['background_image'] ?? null,
            'dimensions' => '243x187',
        ]);

        $output .= Text::get([
            'name' => 'title',
            'label' => __('Title'),
            'value' => $widget_saved_values['title'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'client_app_store_title',
            'label' => __('Client App App Store Download Title'),
            'value' => $widget_saved_values['client_app_store_title'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'client_app_app_store_link',
            'label' => __('Client App App Store Link'),
            'value' => $widget_saved_values['client_app_app_store_link'] ?? null,
            'info' => __('add client app app store link')
        ]);

        $output .= Text::get([
            'name' => 'client_app_google_play_title',
            'label' => __('Client App Google PlayStore Download Title'),
            'value' => $widget_saved_values['client_app_google_play_title'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'client_app_google_play_link',
            'label' => __('Client App Google PlayStore Link'),
            'value' => $widget_saved_values['client_app_google_play_link'] ?? null,
            'info' => __('add client app google play link')
        ]);


        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }


    public function frontend_render() : string
    {
        $settings = $this->get_settings();

        $client_app_image= $settings['client_app_image'];
        $background_image= $settings['background_image'];
        $client_app_store_title = $settings['client_app_store_title'];
        $client_app_app_store_link = $settings['client_app_app_store_link'] ?? '';
        $client_app_google_play_title = $settings['client_app_google_play_title'];
        $client_app_google_play_link = $settings['client_app_google_play_link'] ?? '';
        $title = $settings['title'];

        return $this->renderBlade('HomePage.app-version-section',[
            'client_app_image' => $client_app_image,
            'background_image' => $background_image,
            'client_app_store_title' => $client_app_store_title,
            'client_app_app_store_link' => $client_app_app_store_link,
            'client_app_google_play_title' => $client_app_google_play_title,
            'client_app_google_play_link' => $client_app_google_play_link,
           'title' => $title
        ]);

    }

    public function addon_title()
    {
        return __('App Download Url Section');
    }
}
