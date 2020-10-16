console.log('dom file');

const body = document.querySelector('body')

const styleBody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

styleBody();
addTitle('hello, world from dom file');

const contact = 'supriyo.jana@outlook.com';

export { styleBody, addTitle, contact };