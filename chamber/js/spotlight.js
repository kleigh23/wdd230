const requestURL = 'data.json';
const splotlight1 = document.querySelector('.splotlight1');
const splotlight2 = document.querySelector('.splotlight2');

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
// })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//     const companies = jsonObject['companies'];
//     companies.forEach(displayCompanies);
// });

async function getCompanies() {
    let response = await fetch(requestURL);
    if (response.ok) {
        let data = await response.json();
        displayCompanies(data);
    } else {
        throw Error(response.statusText);
    }
}


function displayCompanies(company) {
    let gold = company.companies.filter(c => c.memberLvl === 'Gold');
    gold.forEach(company => {
        // Create elements to add to the document
        let splotlight1 = document.createElement('section');
        // let splotlight2 = document.createElement('section');
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
        splotlight1.appendChild(h2);
        splotlight1.appendChild(portrait);
        splotlight1.appendChild(p);
        splotlight1.appendChild(p2);
        splotlight1.appendChild(p3);
        // splotlight2.appendChild(h2);
        // splotlight2.appendChild(portrait);
        // splotlight2.appendChild(p);
        // splotlight2.appendChild(p2);
        // splotlight2.appendChild(p3);
            
            
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.spotlight1').appendChild(splotlight1);
        // document.querySelector('div.spotlight2').appendChild(splotlight2);
    });
}; 

getCompanies();