class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score++;
        console.log(`${this.username} has score = ${this.score}`);
        return this;
    }
};

class Admin extends User {
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
};

// const userOne = new User('mario', 'mario@hotmail.com');
// const userTwo = new User('dj', 'dj@gmail.com');
// const admin = new Admin('admin', 'admin@mail.com', 'System Admin');

// console.log(admin);

// userOne.login().incScore().incScore().logout();

// users = [userOne, userTwo, admin];
// console.log(users);
// admin.deleteUser(userTwo);
// console.log(users);

// prototype
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

Car.prototype.start = function () {
    console.log(`${this.brand} car of color ${this.color} is ready to go!!`);
}

Car.prototype.stop = function () {
    console.log(`${this.brand} car of color ${this.color} is stalled!!`);
}

function RaceCar(brand, color, topSpeed) {
    Car.call(this, brand, color);
    this.topSpeed = topSpeed;
}

RaceCar.prototype = Object.create(Car.prototype);

RaceCar.prototype.burnOut = function () {
    console.log(`Sick burnout by ${this.color} colored ${this.brand}`);
}

const car = new Car('BMW', 'black');
const huracan = new RaceCar('Lamborghini', 'Red', '250 kmph');

console.log(car);
car.start();
car.stop();

console.log(huracan);
huracan.start();
huracan.burnOut();