const DAYS_OF_WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const dateTime = new Date();

let currentDay = DAYS_OF_WEEK[dateTime.getDay()];
const dayOfWeek = document.getElementById("dayOfWeek");
dayOfWeek.innerHTML = currentDay;

let currentMonth = MONTHS[dateTime.getMonth()];
const currentDate = document.getElementById("currentDate");
currentDate.innerHTML = `${currentMonth} ${dateTime.getDate()}, ${dateTime.getFullYear()}`;
