// fetch api, async & await

const getTodos = async () => {
    const response = await fetch('todos/luigi.json');

    if (response.status !== 200) {
        throw new Error('can not fetch the data. Error: ' + response.status);
    }

    const data = await response.json();

    return data;
};

const test = getTodos()
    .then(data => console.log('resolved:', data))
    .catch(error => console.log('rejected:', error.message));

// fetch('todos/luigi.json').then(response => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((error) => {
//     console.log('rejected', error);
// });