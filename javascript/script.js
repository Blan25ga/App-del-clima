async function getdata() { // funcion para obtener los datos de la api, se usa en la funcion getWeekDay()
    var inputVal = document.getElementById("searchTxt").value;

    const res = await fetch( // se obtiene la api con los datos de la ciudad ingresada
        "https://weatherapi-com.p.rapidapi.com/current.json?q=q=" + inputVal, { // se usa la api de weatherapi, se usa el metodo fetch para obtener los datos
            method: "GET",
            headers: {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "4f8234a62amsh42185b0b78f249cp12e57ajsnb401d01fcbbf",
            },
        }
    );
    getWeekDay(); // se llama a la funcion para obtener el dia de la semana
    const data = await res.json(); // se convierte la respuesta en un objeto json
    document.getElementById("location").innerText = data.location.name;
    document.getElementById("locationParts").innerHTML = "<i class='bi bi-geo-alt'></i> " +
        data.location.region + " , " + data.location.country;
    document.getElementById("dateTime").innerHTML = "<i class='bi bi-calendar'></i> " +
        data.location.localtime.substr(0, 10);
    document.getElementById("txtWord").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText =
        "Humidity: " + data.current.humidity + "%";
    document.getElementById("precipitation").innerText =
        "Precipitation: " + data.current.precip_mm + "%";
    document.getElementById("wind").innerText =
        "Wind: " + data.current.wind_kph + "km/h";
    document.getElementById("temperatureC").innerText =
        data.current.temp_c + " °C";
    document.getElementById("temperatureF").innerText =
        data.current.temp_f + " °F";
    document.getElementById("weatherIcon").src =
        "https:" + data.current.condition.icon;
}

function getWeekDay() { // funcion para obtener el dia de la semana, se usa en la funcion getdata()
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]; // arreglo con los dias de la semana
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("weekDay").innerText = day; // se obtiene el dia de la semana y se muestra en el html
}