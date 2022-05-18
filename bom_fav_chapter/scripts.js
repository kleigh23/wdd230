document.querySelector("#mybtn").addEventListener("click", function() {
    let mycup = document.querySelector("#theitem").value;
    console.log(mycup);
    if (mycup !== "") {
        const newBtn = document.createElement("button");
        newBtn.innerHTML = "\u274C";

        const newLI = document.createElement("li");
        newLI.textContent = mycup;
        newLI.appendChild(newBtn);

        document.querySelector("#favs").appendChild(newLI);

        document.querySelector("#theitem").value = "";


    } //end of the if


});