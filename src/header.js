const content = document.getElementById('content');

const name = document.createElement('h1');
name.id = `heading`;
name.innerText = `Restaurant`


const home = document.createElement('button');
home.id = `home`;
home.className = 'button';
home.innerText = `Home`;
home.addEventListener('click', home)

const menu = document.createElement('button');
menu.id = `menu`;
menu.className = 'button';
menu.innerText = `Menu`;
menu.addEventListener('click', menu)

const contact = document.createElement('button');
contact.id = `contact`;
contact.className = 'button';
contact.innerText = `Contact`;
// These are the EventListeners I thought would work, and would like to figure
// out why they dont, (or rather, how I should be doing it)
contact.addEventListener('click', contact)

const header = () => {
    content.appendChild(name);
    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);
    // I also tried moving the listeners down here
}


//  And lastly I tried putting them into their own function, exporting them
//  and calling them in index.js, but that also didnt work.

// const listeners = () => {
//     home.addEventListener('click', home)
//     menu.addEventListener('click', menu)
//     contact.addEventListener('click', contact)
// }

export { header }