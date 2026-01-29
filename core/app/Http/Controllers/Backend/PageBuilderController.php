<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\FlashMsg;
use App\Http\Controllers\Controller;
use App\Models\Backend\Page;
use App\Models\Backend\PageBuilder;
use plugins\PageBuilder\PageBuilderSetup;
use Illuminate\Http\Request;

class PageBuilderController extends Controller
{
    const BASE_PATH = 'backend.page-builder.';

    public function homePageBuilder(){
        return view(self::BASE_PATH.'homepage');
    }

    public function aboutPageBuilder(){
        return view(self::BASE_PATH.'aboutpage');
    }
    public function contactPageBuilder(){
        return view(self::BASE_PATH.'contactpage');
    }
    public function dynamicPageBuilder($type,$id){
        if (empty($type) || empty($id)){
            abort(404);
        }
        $page = Page::findOrFail($id);
        return view(self::BASE_PATH.'dynamicpage',compact('id','type','page'));
    }


    public function updateAboutPageBuilder(Request $request){
        $this->validate($request,[
            'about_page_page_builder_status' => 'nullable|string|max:191'
        ]);
        update_static_option('about_page_page_builder_status',$request->about_page_page_builder_status);
        return back()->with(FlashMsg::settings_update());
    }
    public function updateContactPageBuilder(Request $request){
        $this->validate($request,[
            'contact_page_page_builder_status' => 'nullable|string|max:191'
        ]);
        update_static_option('contact_page_page_builder_status',$request->contact_page_page_builder_status);
        return back()->with(FlashMsg::settings_update());
    }
    public function updateHomePageBuilder(Request $request){
        $this->validate($request,[
            'home_page_page_builder_status' => 'nullable|string|max:191'
        ]);
        update_static_option('home_page_page_builder_status',$request->home_page_page_builder_status);
        return back()->with(FlashMsg::settings_update());
    }

    public function getAdminPanelAddonMarkup(Request $request){
        $output = PageBuilderSetup::class::render_widgets_by_name_for_admin([
            'name' => $request->addon_class,
            'namespace' => base64_decode( $request->addon_namespace),
            'type' => 'new',
            'page_id' => $request->addon_page_id ?? '',
            'page_type' => $request->addon_page_type ?? '',
            'location' => $request->addon_location ?? '',
            'after' => false,
            'before' => false,
        ]);
        return $output;
    }

    public function storeNewAddonContent(Request $request){
        $this->validate($request,[
            'addon_name' => 'required',
            'addon_namespace' => 'required',
            'addon_order' => 'nullable',
            'addon_location' => 'required',
        ]);

        unset($request['_token']);
        $widget_content = (array) $request->all();

        // Handle video file uploads
        $widget_content = $this->handleVideoUploads($request, $widget_content);

        $widget_id =  PageBuilder::create([
            'addon_type' => $request->addon_type,
            'addon_location' => $request->addon_location,
            'addon_name' => $request->addon_name,
            'addon_namespace' => base64_decode( $request->addon_namespace),
            'addon_page_id' => $request->addon_page_id,
            'addon_order' => $request->addon_order,
            'addon_page_type' => $request->addon_page_type,
            'addon_settings' => json_encode($widget_content),
        ])->id;
        $data['id'] = $widget_id;
        $data['status'] = 'ok';
        return response()->json($data);
    }

    public function delete(Request $request){
        PageBuilder::findOrFail($request->id)->delete();
        return response()->json('ok');
    }

    public function updateAddonOrder(Request $request){
        PageBuilder::findOrFail($request->id)->update(['addon_order' => $request->addon_order]);
        return response()->json('ok');
    }

    public function updateAddonContent(Request $request){
        $this->validate($request,[
            'addon_name' => 'required',
            'addon_namespace' => 'required',
            'addon_order' => 'nullable',
            'addon_location' => 'required',
        ]);

        unset($request['_token']);
        $addon_content = (array) $request->all();

        // Handle video file uploads
        $addon_content = $this->handleVideoUploads($request, $addon_content);

        PageBuilder::findOrFail($request->id)->update([
            'addon_type' => $request->addon_type,
            'addon_location' => $request->addon_location,
            'addon_name' => $request->addon_name,
            'addon_namespace' => base64_decode($request->addon_namespace),
            'addon_page_id' => $request->addon_page_id,
            'addon_order' => $request->addon_order,
            'addon_page_type' => $request->addon_page_type,
            'addon_settings' => json_encode($addon_content),
        ]);

        return response()->json('ok');
    }

    /**
     * Handle video file uploads for page builder widgets
     * @param Request $request
     * @param array $widget_content
     * @return array
     */
    private function handleVideoUploads(Request $request, array $widget_content): array
    {
        // Get all file inputs that end with '_file'
        $files = $request->allFiles();

        \Log::info('Video upload handler called');
        \Log::info('Files received: ' . count($files));

        foreach ($files as $field_name => $file) {
            \Log::info('Processing field: ' . $field_name);

            // Check if this is a video file field (ends with '_file')
            if (strpos($field_name, '_file') !== false) {
                \Log::info('Video file detected for field: ' . $field_name);

                // Validate video file
                $request->validate([
                    $field_name => 'nullable|file|mimes:mp4,webm,mov,avi|max:51200' // 50MB max
                ]);

                \Log::info('File validation passed');

                // Get the original field name (without '_file' suffix)
                $original_field_name = str_replace('_file', '', $field_name);

                // Generate unique filename
                $filename = time() . '_' . uniqid() . '_' . $file->getClientOriginalName();
                \Log::info('Generated filename: ' . $filename);

                // Create directory if it doesn't exist
                // Go up one level from Laravel root to web root
                $upload_path = dirname(base_path()) . '/assets/uploads/page-builder-videos';
                \Log::info('Upload path: ' . $upload_path);

                if (!file_exists($upload_path)) {
                    \Log::info('Creating directory...');
                    mkdir($upload_path, 0777, true);
                }

                // Move the uploaded file
                \Log::info('Moving file...');
                $moved = $file->move($upload_path, $filename);
                \Log::info('File moved: ' . ($moved ? 'SUCCESS' : 'FAILED'));
                \Log::info('File should be at: ' . $upload_path . '/' . $filename);

                // Store the filename in widget content
                $widget_content[$original_field_name] = $filename;

                // Remove the _file field from content
                unset($widget_content[$field_name]);
            }
        }

        return $widget_content;
    }
}
