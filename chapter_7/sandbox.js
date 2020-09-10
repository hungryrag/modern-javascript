const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,10}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    // validation

    const username = form.username.value;

    if (usernamePattern.test(username)) {
        feedback.style.color = 'green';
        feedback.textContent = 'That username id valid';
    }
    else {
        feedback.style.color = 'red';
        feedback.textContent = 'Username must contain letters only & must be 6-10 characters long';
    }
});

// live feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        // console.log('passed');
        form.username.setAttribute('class', 'success');
    }
    else {
        // console.log('failed;')
        form.username.setAttribute('class', 'error');
    }
});

