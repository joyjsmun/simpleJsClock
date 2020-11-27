const jsClock = document.querySelector(".clock-container");
const timeTitle = jsClock.querySelector("h2");

function getTime(){
const date = new Date();
const hours = date.getHours();
const mins = date.getMinutes();
const seconds = date.getSeconds(); 

timeTitle.innerHTML = 
`${hours < 10 ? `0${hours}` :hours}
:${mins < 10 ? `0${mins}` : mins}:
${seconds < 10 ? `0${seconds}` : seconds}`;

}




function init(){
getTime()
setInterval(getTime,1000);
}

init()

