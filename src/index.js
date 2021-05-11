import { header, homeContent } from './home.js'
import { menuContent } from './menu.js'
import { contactContent } from './contact.js'


header();
homeContent();
menuContent();
contactContent();

const homeTab = document.getElementById('homeContent');
const menuTab = document.getElementById('menuContent');
const contactTab = document.getElementById('contactContent');

menuTab.style.display = 'none';
contactTab.style.display = 'none';

const home = () => {
    homeTab.style.display = 'block';
    menuTab.style.display = 'none';
    contactTab.style.display = 'none';

}

const menu = () => {
    homeTab.style.display = 'none';
    menuTab.style.display = 'block';
    contactTab.style.display = 'none';

}
const contact = () => {
    homeTab.style.display = 'none';
    menuTab.style.display = 'none';
    contactTab.style.display = 'block';

}

document.getElementById('home').addEventListener('click', home)
document.getElementById('menu').addEventListener('click', menu)
document.getElementById('contact').addEventListener('click', contact)
