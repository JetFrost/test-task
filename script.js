
const country = document.getElementById('country');
const region = document.getElementById('region');



country.addEventListener('change', function () {
    getRegions(country.value);
});
region.addEventListener('change', function (){
    getCities(region.value);
});



async function getCountries(){
    const res = await fetch('server.php');
    const data = await res.json();

    document.getElementById('country').innerHTML = '<option disabled selected value> -- select an option -- </option>';
    document.getElementById('region').innerHTML = '<option disabled selected value> -- select an option -- </option>';
    document.getElementById('city').innerHTML = '<option disabled selected value> -- select an option -- </option>';

    data.forEach(item => {
        document.getElementById('country').innerHTML += `
            <option value="${item.id}">${item.country_name}</option>
        `;
    });
}

async function getRegions(countryId){
    const res = await fetch(`server.php?country=${countryId}`);
    const data = await res.json();
    document.getElementById('region').innerHTML = '<option disabled selected value> -- select an option -- </option>';

    data.forEach(item => {
        document.getElementById('region').innerHTML += `
            <option value="${item.id}">${item.region_name}</option>
        `;
    });
}

async function getCities(regionId){
    const res = await fetch(`server.php?region=${regionId}`);
    const data = await res.json();
    document.getElementById('city').innerHTML = '<option disabled selected value> -- select an option -- </option>';

    // console.log(data);

    data.forEach(item => {
        document.getElementById('city').innerHTML += `
            <option value="${item.id}">${item.city_name}</option>
        `;
    });
}

getCountries()

