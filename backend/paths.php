<?php
define('PROJECT', '/angular_js/'); // Project Path
define('SITE_ROOT', $_SERVER['DOCUMENT_ROOT'] . PROJECT); // Site Root
define('SITE_PATH', 'http://' . $_SERVER['HTTP_HOST'] . PROJECT); // Site Path
define('CSS_PATH', SITE_PATH . 'frontend/view/assets/css/'); // Css Path
define('JS_PATH', SITE_PATH . 'view/js/'); // JS Path
define('IMG_PATH', SITE_PATH . 'view/img/'); // IMG Path
define('PRODUCTION', true);
define('MODEL_PATH', SITE_ROOT . 'backend/model/'); // Model Path
define('MODULES_PATH', SITE_ROOT . 'backend/module/'); // Modules Path
define('VIEW_PATH_INC', SITE_ROOT . 'view/inc/'); // View Path Inc
define('RESOURCES', SITE_ROOT . 'resources/'); // Resources Path
define('UTILS', SITE_ROOT . 'backend/utils/'); // Utils Path
define('DB_PATH', SITE_ROOT. 'DB/');

// Contact
define('MODEL_CONTACT', SITE_ROOT . 'module/contact/model/');
define('VIEW_CONTACT', SITE_ROOT . 'module/contact/view/');

//Home
define('VIEW_HOME', SITE_ROOT . 'module/home/view/');
define('MODEL_HOME', SITE_ROOT . 'backend/module/home/model/model/');
define('BLL_HOME', SITE_ROOT . 'backend/module/home/model/BLL/');
define('DAO_HOME', SITE_ROOT . 'backend/module/home/model/DAO/');


//Shop
define('VIEW_SHOP', SITE_ROOT . 'module/shop/view/');
define('MODEL_SHOP', SITE_ROOT . 'backend/module/shop/model/model/');
define('BLL_SHOP', SITE_ROOT . 'backend/module/shop/model/BLL/');
define('DAO_SHOP', SITE_ROOT . 'backend/module/shop/model/DAO/');

//Search
define('VIEW_SEARCH', SITE_ROOT . 'module/search/view/');
define('MODEL_SEARCH', SITE_ROOT . 'backend/module/search/model/model/');
define('BLL_SEARCH', SITE_ROOT . 'backend/module/search/model/BLL/');
define('DAO_SEARCH', SITE_ROOT . 'backend/module/search/model/DAO/');

//Login
define('VIEW_LOGIN', SITE_ROOT . 'module/login/view/');
define('MODEL_LOGIN', SITE_ROOT . '/module/login/model/model/');

//Cart
define('VIEW_CART', SITE_ROOT . 'module/cart/view/');
define('MODEL_CART', SITE_ROOT . '/module/cart/model/model/');

//Profile
define('VIEW_PROFILE', SITE_ROOT . 'module/profile/view/');
define('MODEL_PROFILE', SITE_ROOT . '/module/profile/model/model/');

//CRUD
define('VIEW_CRUD', SITE_ROOT . 'module/crud/view/');
define('MODEL_CRUD', SITE_ROOT . '/module/crud/model/model/');

// Friendly
define('URL_FRIENDLY', TRUE);

if ($_GET['op'] == 'get') {
    echo json_encode(URL_FRIENDLY);
}
