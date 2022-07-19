const url = 'json/temple.json';
const cards = document.querySelector('.cards')

fetch(url)
    .then(function(response) {
        return response.json();
})
    .then(function (jsonObject) {
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
});

function displayTemples(temple) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let img = document.createElement('img');

    
    h2.textContent = (`${temple.name}`);
    p.textContent = (`Address: ${temple.address}`);
    p1.textContent = (`Phone: ${temple.phone}`);
    p2.textContent = (`Email: ${temple.email}`);
    p3.textContent = (`Services: ${temple.services}`);
    p4.textContent = (`History: ${temple.history}`);
    p5.textContent = (`Ordinace Schedule: ${temple.ord_schedule}`);
    p6.textContent = (`Session Schedule: ${temple.sess_schedule}`);
    p7.textContent = (`Closer Schedule: ${temple.close_schedule}`);
  
    img.setAttribute('src', temple.image);
    img.setAttribute('alt', temple.name);
    img.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(p);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);

    document.querySelector('div.cards').appendChild(card);
};

// get favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
// register click event listener
document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className = 'fav';
  // item is already favorite
  } else {
    favorites.splice(index, 1);
    item.className = '';
  }
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage