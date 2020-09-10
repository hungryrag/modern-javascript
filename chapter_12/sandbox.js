// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log("Callback function fired!");
// }, 5000);

// setTimeout(() => {
//     console.log(2);
//     console.log(4);
// }, 2000);

// Making HTTP request (XHR)

const getTodos = resource => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);

            if (request.readyState === 4 && request.status === 200) {
                // console.log(request, request.responseText);
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                // console.log("Couldn't fetch the data");
                reject('could not find resource. Error: ' + request.status);
            }
        });

        //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource)
        request.send();
    });

};

// console.log(1);
// console.log(2);

// getTodos('todos/luigi.json', (error, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (error, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (error, data) => {
//             console.log(data);
//         });
//     });
//     // console.log('callback fired');
//     // if (error) {
//     //     console.log(error);
//     // } else {
//     //     console.log(data);
//     //}
// });

// console.log(3);
// console.log(4);

getTodos('todos/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/shaun.json')
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(error => {
    console.log(error);
});

// promise example

const getSomething = () => {


    return new Promise((resolve, reject) => {
        // fetch something
        resolve('some data');
        // reject('some error');
    });
};

// getSomething().then((data) => {
//     console.log(data);
// }, (error) => {
//     console.error(error);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });