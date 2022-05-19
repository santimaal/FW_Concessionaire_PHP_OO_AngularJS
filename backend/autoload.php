<?php
require_once("paths.php");
spl_autoload_extensions('.php,.inc.php,.class.php,.class.singleton.php');
spl_autoload_register('loadClasses');

function loadClasses($className)
{
    $breakClass = explode('_', $className);
    $modelName = "";

    if (isset($breakClass[1])) {
        $modelName = strtoupper($breakClass[1]);
    }
    if (file_exists(SITE_ROOT . 'backend/module/' . $breakClass[0] . '/model' . $modelName . '/' . $className . '.class.singleton.php')) {
        set_include_path('backend/module/' . $breakClass[0] . '/model/' . $modelName . '/');
        spl_autoload($className);
    } else if (file_exists(SITE_ROOT . 'DB/' . $className . '.class.singleton.php')) {
        set_include_path(SITE_ROOT . 'DB/');
        spl_autoload($className);
    } else if (file_exists(SITE_ROOT . 'DB/' . $className . '.class.php')) {
        set_include_path(SITE_ROOT . 'DB/');
        spl_autoload($className);
    } else if (file_exists(UTILS  . $className . '.inc.php')) {
        set_include_path(UTILS);
        spl_autoload($className);
    }
}
