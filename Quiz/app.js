const correctAnswers = ['B', 'B', 'B', 'B'];
const displayResult = document.querySelector('.result');
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index])
            score++;
    });
    let result = score / correctAnswers.length * 100;

    // show result on page

    scrollTo(0, 0);
    displayResult.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        output++;
        displayResult.querySelector('span').textContent = `${output}%`;

        if (output === result)
            clearInterval(timer);
    }, 10);
});

// window object

// console.log('hello');
// window.console.log('hello');

// console.log(window.document.querySelector('form'))

// // alert('hello');
// window.alert('hello');

// setTimeout(() => {
//     console.log('hello');
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i === 5) {
//         clearInterval(timer);
//     }
// }, 1000);