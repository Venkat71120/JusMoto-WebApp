<?php

return [
    'app_name' => 'GoCar', // must use one word, like Fundorex or Nazmart
    'super_admin_role_id' => 1,
    'admin_model' =>  \App\Models\Backend\Admin::class,
    'admin_table' => 'admins',
    'multi_tenant' => false,
    'author' => 'bytesed',
    'product_key' => '2e3f7542d3ff7a74fe6e450af5057b69ef61b5e4',
    'php_version' => '8.2',
    'extensions' => ['BCMath', 'Ctype', 'JSON', 'Mbstring', 'OpenSSL', 'PDO', 'pdo_mysql', 'Tokenizer', 'XML', 'cURL', 'fileinfo'],
    'website' => 'https://bytesed.com',
    'email' => 'support@xgenious.com',
    'env_example_path' => public_path('env-sample.txt'),
    'broadcast_driver' => 'log',
    'cache_driver' => 'file',
    'queue_connection' => 'sync',
    'mail_port' => '587',
    'mail_encryption' => 'tls',
    'model_has_roles' => true,
    'bundle_pack' => false,
    'bundle_pack_key' => '',
];