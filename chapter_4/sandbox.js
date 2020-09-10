// get a reference to the 'ul'
const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'toad', 'bowser', 'ayu'];


let html = ``;
people.forEach(person => {
    // create html template for each person

    html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;