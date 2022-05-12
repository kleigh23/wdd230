const datefieldUK = document.querySelector("#currentDate");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}


const x = document.querySelector('#hamburgerBtn')
x.onclick = toggleMenu;

let oLastModif = document.lastModified;
document.querySelector("#currentdate").textContent = oLastModif;