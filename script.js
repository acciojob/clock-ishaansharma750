//your JS code here. If required.
let clock = document.getElementById("timer");

setInterval(showTime, 1000);
function showTime() {
    let d = new Date();
	let day = d.getDate()
	let month = d.getMonth() + 1
	let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = `${month}/${day}/${year}, ${hour}:${min}:${sec} ${am_pm}`;
    clock.innerHTML = currentTime;
}
showTime();