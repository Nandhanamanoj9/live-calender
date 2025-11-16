const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dateEl = document.getElementById("date");


//now we hav eto get todays date

const today = new Date()


console.log(today)
// create arrays for names
const alldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allmonths = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
//now here comes we upadte it

date.innerHTML =(today.getDate<10?"0":"") + today.getDate()
day.innerHTML = alldays[today.getDay()]
month.innerHTML = allmonths[today.getMonth()]
year.innerHTML = today.getFullYear()








//adding time
function showTime() {
  const now = new Date(); // get current time every second

  // get hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // add 0 before single-digit numbers (like 7 → 07)
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // display in your HTML
  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
}

// call showTime() every 1000ms (1 second)
setInterval(showTime, 1000);

// also call once immediately when page loads
showTime();



