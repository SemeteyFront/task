const date = new Date();
(function (){
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const numWeek = date.getDay();
    document.querySelector("#today").textContent = week[numWeek - 1]
}());

let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();

function start(){
    sec++;
    if(sec === 60) {
        sec = 0
        min++
    } else if(min === 60){
        min = 0;
        hour++;
    } else if(hour === 24){
        hour = 0
    } else {
        document.querySelector("#time").innerHTML = `${hour}:${min}:${sec}`
    }
}

setInterval(start, 1000) 