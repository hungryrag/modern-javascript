let age = 50;

//let age = 30;

if (true) {
    let age = 40;
    let name = 'dhrubo';
    console.log('inside 1st code block:', age, name);

    if (true) {
        let age = 30;
        console.log('inside 2nd code block:', age);
    }
}

console.log('outside code block:', age, name);