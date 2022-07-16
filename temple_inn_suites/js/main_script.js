// this is for the current date in the header.
const datefieldUK = document.querySelector("#today");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


// this is for the hamburger button.
function toggleMenu() {
    document.querySelector("#normal_nav").classList.toggle("open");
    document.querySelector("#hamburger").classList.toggle("open");
}

const x = document.querySelector('#hamburger')
x.onclick = toggleMenu;


// this is for the last modfidied date in the footer.
let oLastModif = document.lastModified;
document.querySelector("#updated").textContent = oLastModif;