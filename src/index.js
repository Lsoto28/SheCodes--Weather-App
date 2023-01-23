function formatDate(Date) {
    let hours = currentTime.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let dayLog = currentTime.getDay();

    return `${days[dayLog]} ${hours}:${minutes}`;
}

function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
dateElement.innerHTML = formatDate(currentTime);
