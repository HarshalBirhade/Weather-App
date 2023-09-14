const searchBtn = document.getElementById("searchBtn");
const city_name = document.getElementById("city_name");
const inputCity = document.getElementById("inputCity");
const temp = document.getElementById("temp");
const day = document.getElementById("day");
const todayDate = document.getElementById("todayDate");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector("data_hide");

let getInfo = async (event) => {
  event.preventDefault();
  let city = inputCity.value;

  if (city == "") {
    city_name.textContent = "Please enter city name before search";
    temp.textContent = "";
    temp_status.textContent = "";
  } else {
    try {
      let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=33GYBXMNE8TK98SA596AVRGUJ&contentType=json`;
      let response = await fetch(url);
      //Convert json to object
      let objData = await response.json();
      let arrData = [objData];
      let temperature = arrData[0].currentConditions.temp;
      //console.log(temperature);
      let currCon = arrData[0].currentConditions.conditions;
      //console.log(currCon);
      let location = arrData[0].resolvedAddress;
      city_name.textContent = location;
      temp.textContent = `${temperature} °C`;
      temp_status.textContent = currCon;
    } catch {
      city_name.textContent = "Please enter city name properly";
      dataHide.classList.add("data_hide");
    }
  }
};
searchBtn.addEventListener("click", getInfo);

//Date Modification
let d = new Date();
let dayNum = d.getDay();
let monthNum = d.getMonth();
let date = d.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

day.textContent = days[dayNum];
// console.log(days[dayNum]);
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
todayDate.textContent = `${date} ${months[monthNum]}`;
