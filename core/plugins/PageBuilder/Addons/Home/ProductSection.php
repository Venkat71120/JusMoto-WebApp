<?php

namespace plugins\PageBuilder\Addons\Home;

use App\Http\Services\PopularProducts;
use App\Http\Services\PopularServices;
use Illuminate\Support\Facades\Cookie;
use plugins\PageBuilder\Fields\Image;
use plugins\PageBuilder\Fields\Text;
use plugins\PageBuilder\PageBuilderBase;
use plugins\PageBuilder\Traits\LanguageFallbackForPageBuilder;

class ProductSection extends PageBuilderBase
{
    use LanguageFallbackForPageBuilder;

    public function preview_image()
    {
        return 'Home/product_section.jpg';
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

        $popular_products=new PopularProducts();
        $popular_products= $popular_products->popularProducts();

        $userId = auth()->id();
        $guestToken = Cookie::get('guest_token');
        $cartItemIds = \App\Models\UserCartItem::where(function($q) use($userId, $guestToken) {
            if ($userId) {
                $q->where('user_id', $userId);
            } else {
                $q->whereNotNull('guest_token')
                    ->where('guest_token', $guestToken);
            }
        })->pluck('item_id')->toArray();

        return $this->renderBlade('HomePage.product-section',[
            'background_image' => $background_image,
            'title' => $title,
            'popular_products' =>  $popular_products,
            'cartItemIds' => $cartItemIds,
        ]);

    }

    public function addon_title()
    {
        return __('Popular Product Section');
    }
}
