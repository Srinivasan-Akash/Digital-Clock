const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const hours = document.getElementById("hours")
const AMorPM = document.getElementById("am")
const divAm = document.querySelector("#remove")
const format = document.getElementById("twelveORTwentyFour")
const formatDiv = document.getElementById("timeFormat")



function timer() {

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    if (h < 10){
        h = "0" + h
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    formatDiv.addEventListener("click", function() {
        if(format.innerText == "24H"){
            format.innerText = "12H"
            AMorPM.style.display = "none"
            divAm.style.display = "none"

    
        }

        if (format.innerText == "12H"){
            format.innerText = "12H"
            AMorPM.style.display = "block"
            divAm.style.display = "block"


            if(h >= 12){
                h = h - 12;
                AMorPM.innerHTML = `<span id="am">AM</span>`
            }
        }
    })
    
setTimeout(() => {
    timer()
}, 1000)
}


timer()