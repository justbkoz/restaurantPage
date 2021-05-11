const content = document.getElementById('content');

const contactContents = document.createElement('div');
contactContents.id = `contactContent`;
contactContents.class = 'contents';
contactContents.innerText = `Here's the contact info`


const contactContent = () => {
    content.appendChild(contactContents)
}

export { contactContent }