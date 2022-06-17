const requestURL = 'data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
});



function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('a');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    h2.textContent = company.name;
    p.textContent = company.address;
    p2.textContent = company.phone;
    var link = document.createTextNode(`${company.name}.com`);
    p3.appendChild(link);
    p3.title = (`${company.name}.com`);
    p3.href = company.websiteUrl;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.imgUrl);
    portrait.setAttribute('alt', 'logo for' + " " + company.name);
    portrait.setAttribute('width', 320)
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }; 



  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector(".cards");
  
  // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
  
  gridbutton.addEventListener("click", () => {
      // example using arrow function
      display.classList.add("grid");
      display.classList.remove("list");
  });
  
  listbutton.addEventListener("click", showList); // example using defined function
  
  function showList() {
      display.classList.add("list");
      display.classList.remove("grid");
  }
  