const list = document.querySelector('#favs');
const input = document.querySelector('#theitem');
const button = document.querySelector('#mybtn');

button.addEventListener('click', ()=> {
    
    const myItem = input.value;
    
    if (myItem !== "") {    

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '\u274C'
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.value = '';
        input.focus();
    }
    
    
})