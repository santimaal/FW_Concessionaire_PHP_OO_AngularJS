<?php
class controller_home
{
    function homePageBrand()
    {
        echo json_encode(common::load_model('home_model', 'get_carousel'));
    }

    function homePageCat()
    {
        echo json_encode(common::load_model('home_model', 'get_categoria'));
    }

    function homePageType()
    {
        echo json_encode(common::load_model('home_model', 'get_types'));
    }

    function load_more()
    {
        echo json_encode(common::load_model('home_model', 'get_load_more'));
    }
}
