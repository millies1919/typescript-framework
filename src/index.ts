import { User } from './models/user';

const user = new User({ name: 'ALEX', age: 20 });

user.set({ name: 'newname' });

console.log(user.get('name'));
console.log(user.get('age'));
