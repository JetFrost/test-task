<?php

function getCountries($connect){
    $countries = mysqli_query($connect, 'SELECT * FROM `country`');
    $countriesData = [];
    while ($country = mysqli_fetch_assoc($countries)){
        $countriesData[] = $country;
    }
    echo json_encode($countriesData);
}

function getRegions($connect, $id){
    $regions = mysqli_query($connect, "SELECT * FROM `region` WHERE `country_id`=$id");
    $regionsData = [];
    while ($region = mysqli_fetch_assoc($regions)){
        $regionsData[] = $region;
    }
    echo json_encode($regionsData);
}

function getCities($connect, $id){
    $cities = mysqli_query($connect, "SELECT * FROM `cities` WHERE `region_id`=$id");
    $citiesData = [];
//    $arr = [
//        "status" => true
//    ];
//    echo json_encode($arr);
    while ($city = mysqli_fetch_assoc($cities)){
        $citiesData[] = $city;
    }
    echo json_encode($citiesData);
}