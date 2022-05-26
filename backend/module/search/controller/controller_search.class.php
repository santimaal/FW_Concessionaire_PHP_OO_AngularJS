<?php
class controller_search
{
    function marcas()
    {
        echo json_encode(common::load_model('search_model', 'get_marcas'));
    }

    function ciudades_m()
    {
        echo json_encode(common::load_model('search_model', 'get_ciudades', $_POST['marca']));
    }

    function ciudades()
    {
        echo json_encode(common::load_model('search_model', 'get_ciudades'));
    }

    function autocomplete()
    {
        echo json_encode(common::load_model('search_model', 'get_autocomplete', [$_POST['auto'], $_POST['marca'], $_POST['city']]));
    }
}