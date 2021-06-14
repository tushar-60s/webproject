
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerText = 'Plz write the name before search';
        datahide.classList.add('data_hide');
    } else {
        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7768b75cb1cb1fe8daa72a26eb8f2d69`
            const responce = await fetch(url)

            const data = await responce.json();

            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

            console.log(arrData[0].main.temp)
            temp_real_val.innerText = arrData[0].main.temp;

            //temp_status.innerText = arrData[0].weather[0].main;
            console.log(arrData[0].weather[0].main)



            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy

            if (tempMood == "clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style= 'color:#eccc68;'></i>"
            } else if (tempMood == "clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style= 'color:#f1f2f6;'></i>"

            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-rain' style= 'color:#a4b0be;'></i>"

            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style= 'color:#f1f2f6;'></i>"

            }

            datahide.classList.remove('data_hide');



        } catch {
            city_name.innerText = 'Plz enter the city name properly';
            datahide.classList.add('data_hide');

        }

    }

}
submitBtn.addEventListener('click', getInfo)