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

// message for how many days since last visit
const visitDisplay = document.querySelector('#lastVisit')

const mInDay = 1000 * 60 * 60 * 24;

const today = Number(Date.now());

console.log(`millisecond in a day is ${mInDay}`);

let lastVisit = Number(window.localStorage.getItem("visit-is"));

localStorage.setItem("visit-is", today);

let difference = Math.round((now - lastVisit)/mInDay);

console.log(difference)

if (difference == 0) {
    visitDisplay.textContent = `Days since last visit 0`
} else {
    visitDisplay.textContent = (`Days since last visit ${difference}`);
}

lastVisit++;

localStorage.setItem("visits-ls", lastVisit);

