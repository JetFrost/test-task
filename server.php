<?php

require_once 'connect.php';
require_once 'functions.php';

//$arr = [
//    "status" => true
//];
//echo json_encode($arr);
if (empty($_GET)){
    getCountries($connect);
}
if(!empty($_GET['country'])){
    getRegions($connect, $_GET['country']);
}
if (!empty($_GET['region'])){
    getCities($connect, $_GET['region']);
//    $arr = [
//        "status" => true,
//        "region_id" => $_GET['region']
//    ];
//    echo json_encode($arr);
}


