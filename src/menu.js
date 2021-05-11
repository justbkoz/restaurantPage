const content = document.getElementById('content');

const menuContents = document.createElement('div');
menuContents.id = `menuContent`;
menuContents.class = 'contents';
menuContents.innerText = 'This is an awesome menu!'


const menuContent = () => {
    content.appendChild(menuContents)
}

export { menuContent }