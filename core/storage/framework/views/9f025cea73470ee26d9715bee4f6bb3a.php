<style>
    #filePreview{
        display: none;
        max-width: 100%;
       
    }
    #fileDownload{
        display: none;
    }
</style>    
<!-- Bootstrap Modal -->
<div class="modal fade" id="fileModal" tabindex="-1" aria-labelledby="fileModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="fileModalLabel">File Preview</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Content will be dynamically added here -->
                <img id="filePreview" src="" class="img-fluid" />
                <a id="fileDownload" href="" download class="btn btn-primary">Download File</a>
            </div>
        </div>
    </div>
</div>
<?php /**PATH /Users/venkatesharavamudhan/Claude/JusMoto/main-files/Admin Panel/extracted/gocar-v1.1.0/core/resources/views/backend/pages/orders/manual-payment-file-modal.blade.php ENDPATH**/ ?>