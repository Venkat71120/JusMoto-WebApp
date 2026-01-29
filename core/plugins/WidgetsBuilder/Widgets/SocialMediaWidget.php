<?php

namespace plugins\WidgetsBuilder\Widgets;
use App\Language;
use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Textarea;
use plugins\PageBuilder\Helpers\RepeaterField;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;
use plugins\WidgetsBuilder\WidgetBase;
use plugins\PageBuilder\Fields\IconPicker;
use plugins\PageBuilder\Fields\Text;

class SocialMediaWidget extends WidgetBase
{

    public function admin_render()
    {
        $output = $this->admin_form_before();
        $output .= $this->admin_form_start();
        $output .= $this->default_fields();
        $widget_saved_values = $this->get_settings();

        $output .= Image::get([
            'name' => 'site_logo',
            'label' => __('Upload logo'),
            'value' => $widget_saved_values['site_logo'] ?? null,
            'dimensions' => '20x20',
        ]);


        $output .= Textarea::get([
            'name' => 'description',
            'label' => __('Description'),
            'value' => $widget_saved_values['description'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'email',
            'label' => __('Email Address'),
            'value' => $widget_saved_values['email'] ?? null,
        ]);

        $output .= IconPicker::get([
            'name' => 'facebook_icon',
            'label' => __('Facebook Icon'),
            'value' => $widget_saved_values['facebook_icon'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'facebook_url',
            'label' => __('Facebook URL'),
            'value' => $widget_saved_values['facebook_url'] ?? null,
        ]);

        $output .= IconPicker::get([
            'name' => 'linkedin_icon',
            'label' => __('Linkedin Icon'),
            'value' => $widget_saved_values['linkedin_icon'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'linkedin_url',
            'label' => __('Linkedin URL'),
            'value' => $widget_saved_values['linkedin_url'] ?? null,
        ]);


        $output .= IconPicker::get([
            'name' => 'instagram_icon',
            'label' => __('Instagram Icon'),
            'value' => $widget_saved_values['instagram_icon'] ?? null,
        ]);

        $output .= Text::get([
            'name' => 'instagram_url',
            'label' => __('Instagram URL'),
            'value' => $widget_saved_values['instagram_url'] ?? null,
        ]);




        $output .= $this->admin_form_submit_button();
        $output .= $this->admin_form_end();
        $output .= $this->admin_form_after();

        return $output;
    }

    public function frontend_render()
    {
        $settings = $this->get_settings();

        $description= $settings['description'];
        $email= $settings['email'];
        $site_logo= $settings['site_logo'];


        // Convert Line Awesome icons to Font Awesome
        $facebook_icon = $this->convertLAToFA($settings['facebook_icon']);
        $facebook_url = $settings['facebook_url'];

        $linkedin_icon = $this->convertLAToFA($settings['linkedin_icon']);
        $linkedin_url = $settings['linkedin_url'];

        $instagram_icon = $this->convertLAToFA($settings['instagram_icon']);
        $instagram_url = $settings['instagram_url'];
        $logo = render_image_markup_by_attachment_id($site_logo,'','thumb');

        $url = url('/');
    return <<<HTML
           <div class="row justify-between g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget widget footer-info-widget">
                        <a href="{$url}" class="footer-logo">
                          {$logo}
                        </a>
                        <div class="footer-info-pera">
                            <p>
                                {$description}
                            </p>
                            <p class="email">{$email}</p>
                             <ul class="custom-ul footer-social-link-list">
                            <li class="footer-social-link-item">
                                <a href="#/">
                                    <i class="{$facebook_icon}"></i>
                                </a>
                            </li>
                            <li class="footer-social-link-item">
                                <a href="#/">
                                    <i class="{$linkedin_icon}"></i>
                                </a>
                            </li>
                            <li class="footer-social-link-item">
                                <a href="#/">
                                    <i class="{$instagram_icon}"></i>
                                </a>
                            </li>
                        </ul>
                        </div>

                    </div>
                </div>
HTML;
}

    public function widget_title()
    {
        return __('Social Media');
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
