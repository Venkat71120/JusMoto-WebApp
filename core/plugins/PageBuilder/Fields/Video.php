<?php


namespace plugins\PageBuilder\Fields;


use plugins\PageBuilder\Helpers\Traits\FieldInstanceHelper;
use plugins\PageBuilder\PageBuilderField;

class Video extends PageBuilderField
{
    use FieldInstanceHelper;

    /**
     * render field markup
     * */
    public function render()
    {
        $output = '';
        $output .= $this->field_before();
        $output .= $this->label();

        $video_upload_btn_label = __('Upload Video');
        $output .= '<div class="video-upload-wrapper">';

        // Check if video already exists
        $video_info = !empty($this->value()) ? get_attachment_video_by_filename($this->value()) : [];

        if (!empty($video_info) && $video_info['exists']) {
            // Show existing video preview
            $output .= '<div class="video-preview-wrapper">';
            $output .= '<div class="video-remove-btn"><span class="rmv-video"><i class="fas fa-trash"></i></span></div>';
            $output .= '<div class="video-preview">';
            $output .= '<video width="100%" height="200" controls>';
            $output .= '<source src="' . $video_info['video_url'] . '" type="' . $video_info['mime_type'] . '">';
            $output .= __('Your browser does not support the video tag.');
            $output .= '</video>';
            $output .= '</div>';
            $output .= '<div class="video-info">';
            $output .= '<p><strong>' . __('File') . ':</strong> ' . $video_info['filename'] . '</p>';
            $output .= '<p><strong>' . __('Size') . ':</strong> ' . $video_info['size_formatted'] . '</p>';
            $output .= '</div>';
            $output .= '</div>';
            $video_upload_btn_label = __('Change Video');
        }

        // Hidden input to store video filename
        $output .= '<input type="hidden" class="video-filename-input" value="' . $this->value() . '" name="' . $this->name() . '" />';

        // File input for video upload
        $output .= '<div class="video-upload-input-wrapper">';
        $output .= '<input type="file" name="' . $this->name() . '_file" class="video-file-input" accept="video/mp4,video/webm,video/mov,video/avi" style="display:none;" />';
        $output .= '<button type="button" class="cmnBtn btn_5 btn_bg_blue radius-5 video-upload-trigger-btn">' . $video_upload_btn_label . '</button>';
        $output .= '</div>';

        $output .= '</div>';

        // Add dimensions info if provided
        if (isset($this->args['dimensions'])) {
            $output .= '<small>' . __('Recommended video dimensions') . ': ' . $this->args['dimensions'] . '</small><br>';
        }

        // Add max size info
        if (isset($this->args['max_size'])) {
            $output .= '<small>' . __('Maximum file size') . ': ' . $this->args['max_size'] . '</small>';
        } else {
            $output .= '<small>' . __('Maximum file size') . ': 50MB</small>';
        }

        $output .= $this->field_after();

        return $output;
    }
}
