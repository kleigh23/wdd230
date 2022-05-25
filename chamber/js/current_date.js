// this is for the current date in the header.
const datefieldUK = document.querySelector("#currentDate");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


// this is for the hamburger button.
function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector('#hamburgerBtn')
x.onclick = toggleMenu;


// this is for the last modfidied date in the footer.
let oLastModif = document.lastModified;
document.querySelector("#currentdate").textContent = oLastModif;


// This is for the year for the copy right.
let year = now.getFullYear();
document.querySelector("#year").textContent = year;

const dayNumber = now.getDay();
//console.log(dayNumber);

const element = document.querySelector("#message");

if (dayNumber == 1 || dayNumber == 2) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}

// this is for the wind chill
const tempNumber = parseFloat(document.querySelector("#tempeture").textContent);
//console.log(tempNumber);

const speedNumber = parseFloat(document.querySelector("#speed").textContent);
//console.log(speedNumber);

let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber,
    0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
windchill = Math.round(windchill);
//console.log(windchill);

if(tempNumber<=50 && speedNumber >3) {
    document.querySelector("#chill").textContent = "Wind Chill: "+windchill+"\xB0F";
} else {
    document.querySelector("#chill").textContent = "Wind Chill: N/A"
}