const datefield = document.querySelector("#currentDate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}


const x = document.querySelector('#hamburgerBtn')
x.onclick = toggleMenu;

let oLastModif = document.lastModified;
document.querySelector("#currentdate").textContent = oLastModif;