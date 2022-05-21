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
console.log(dayNumber);

const element = document.querySelector("#message");

if (dayNumber == 1 || dayNumber == 2) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}