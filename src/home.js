const content = document.getElementById('content');

const name = document.createElement('h1');
name.id = `heading`;
name.innerText = `Restaurant`


const home = document.createElement('button');
home.id = `home`;
home.className = 'button';
home.innerText = `Home`;
// home.addEventListener('click', home)

const menu = document.createElement('button');
menu.id = `menu`;
menu.className = 'button';
menu.innerText = `Menu`;
// menu.addEventListener('click', menu)

const contact = document.createElement('button');
contact.id = `contact`;
contact.className = 'button';
contact.innerText = `Contact`;
// contact.addEventListener('click', contact)

const homeContents = document.createElement('div');
homeContents.id = `homeContent`;
homeContents.className = 'contents';
homeContents.innerText =
    `This is the Best Restaurant Ever \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec euismod sapien. Mauris blandit laoreet orci ac pulvinar. Duis mi justo, molestie non posuere sit amet, vulputate id odio. Maecenas quam quam, finibus ut hendrerit eu, feugiat vitae ex. Donec et ligula neque. Vivamus faucibus volutpat urna, eleifend posuere quam blandit ac. Duis et dictum lorem. Sed aliquet tellus pulvinar, eleifend nulla eget, finibus magna. Praesent convallis augue ac ullamcorper venenatis. Morbi tristique, magna at scelerisque pulvinar, dolor lorem aliquet nunc, sed laoreet urna augue sit amet velit. Integer vitae sagittis nisi, id consectetur est.`;

const header = () => {
    content.appendChild(name);
    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);
}

const homeContent = () => {
    content.appendChild(homeContents)
}

export { header, homeContent }
