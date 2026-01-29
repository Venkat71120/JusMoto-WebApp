<?php

namespace plugins\PageBuilder\Addons\Contact;

use App\Helpers\FormBuilderCustom;
use App\Helpers\SanitizeInput;
use App\Models\FormBuilder;
use plugins\PageBuilder\Fields\Repeater;
use plugins\PageBuilder\Fields\Select;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\PageBuilderBase;

class ContactInfoSection extends PageBuilderBase
{
    public function preview_image()
    {
        return 'contact/contact.jpg';
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

        $output .= Text::get([
            'name' => 'sub_title',
            'label' => __('Sub Title'),
            'value' => $widget_saved_values['sub_title'] ?? null,
        ]);

        //share icons repeater
        $output .= Repeater::get([
            'settings' => $widget_saved_values,
            'id' => 'contact_page_contact_info_section',
            'fields' => [
                [
                    'type' => RepeaterField::IMAGE,
                    'name' => 'contact_page_contact_info_image',
                    'label' => __('Contact Info Image'),
                    'class' => "mt-5"
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'contact_page_contact_info_title',
                    'label' => __('Contact Info Title')
                ],
                [
                    'type' => RepeaterField::TEXT,
                    'name' => 'contact_page_contact_info',
                    'label' => __('Contact Info')
                ]
            ]
        ]);

        $output .= Text::get([
            'name' => 'map_iframe_src',
            'label' => __('Map Embed (iframe src only)'),
            'placeholder' => 'https://www.google.com/maps/embed?...',
            'value' => $widget_saved_values['map_iframe_src'] ?? '',
        ]);

        $output .= Text::get([
            'name' => 'heading',
            'label' => __('Contact Form Heading'),
            'value' => $widget_saved_values['heading'] ?? __('Heading'),
            'max' => 500,
        ]);

        $output .= Select::get([
            'name' => 'custom_form_id',
            'label' => __('Custom Form'),
            'placeholder' => __('Select form'),
            'options' => FormBuilder::all()->pluck('title','id')->toArray(),
            'value' =>   $widget_saved_values['custom_form_id'] ?? []
        ]);


        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;

    }

    public function frontend_render()
    {
        $settings = $this->get_settings();
        $heading = \plugins\FormBuilder\SanitizeInput::esc_html($this->setting_item('heading'));
        $sub_title = $settings['sub_title'] ?? '';
        $title = $settings['title'] ?? '';
        $repeater_data = $settings['contact_page_contact_info_section'] ?? [];
        $custom_form_id = SanitizeInput::esc_html($this->setting_item('custom_form_id'));

        $form_details = null;

        if (!empty($custom_form_id)){
            $form = \App\Models\Backend\FormBuilder::find($custom_form_id);
            $form_details =  FormBuilderCustom::render_form(optional($form)->id,null,null,'btn-default');

        }

        $iframe_src = $settings['map_iframe_src'] ?? '';

        if (!empty($iframe_src)) {
            if (!preg_match('#^https://(www\.)?google\.com/maps/embed#', $iframe_src)) {
                $iframe_src = '';
            }
        }


        return $this->renderBlade('contact.contact-info-section',[
            'title' => $title,
            'sub_title' => $sub_title,
            'repeater_data' => $repeater_data,
            'iframe_src' => $iframe_src,
            'form_details' => $form_details,
            'heading' => $heading,
        ]);
    }
    public function addon_title()
    {
        return __('Contact Info');
    }
}
