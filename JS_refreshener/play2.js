const person = {
    name: 'Niko',
    age: 19,
    greet: function() {
        console.log('Hi, I am ' + this.name);
    },
}

person.greet();

const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//     console.log(hobby);
// // };
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

// const copiedArray = hobbies.slice()
const copiedArray = [...hobbies];
console.log(copiedArray);

hobbies.push('More hobbies');
console.log(hobbies);
console.log(copiedArray);

const toArray = (...args) => [...args];
let createdArray = toArray(1, 2, 3, 4, 5);
console.log(createdArray);