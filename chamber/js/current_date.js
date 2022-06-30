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

// this is for the last modfidied date in the footer.
// let submit = document.lastModified;
// document.querySelector("#dateTime").textContent = submit;


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

// lazy load js
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

const intersectionCallback = (items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target)
        }
    });
}

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(intersectionCallback, imgOptions); 
    imagesToLoad.forEach((img) => {
        observer.observe(img)
    });
}

else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}