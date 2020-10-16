import { styleBody, addTitle, contact } from './dom';
import testUsers, { getPremUsers } from './data';
import users from './data';

console.log('index file');
addTitle('test');
styleBody();
console.log(contact);

console.log(testUsers);

const premUsers = getPremUsers(users);
console.log(premUsers);