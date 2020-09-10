// Object literals

// const blogs = [
//     { title: 'Batman Rules', likes: 100 },
//     { title: 'Thanos was right', likes: 56 },
//     { title: 'me so horny', likes: 500 }
// ];

// console.log(blogs);

let user = {
    name: 'Dhrubo',
    age: 23,
    email: 'dhrubojana007@gmail.com',
    location: 'Kolkata',
    blogs: [
        { title: 'Batman Rules', likes: 100 },
        { title: 'Thanos was right', likes: 56 },
        { title: 'me so horny', likes: 500 }
    ],
    login() {
        console.log('the user logged in');
    },
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        //console.log(this.blogs);
        console.log('this user has written following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
// console.log(this);


// primitive values

let score1 = 50;
let score2 = score1;

console.log(`Score One: ${score1}, Score Two: ${score2}`);

score1 = 100;
console.log(`Score One: ${score1}, Score Two: ${score2}`);

// reference values

const user1 = { name: 'dj', age: 27 };
const user2 = user1;

console.log(user1, user2);

user2.name = 'dhrubo';
console.log(user1, user2);