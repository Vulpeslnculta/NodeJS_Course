const person = {
    name: 'Niko',
    age: 19,
    greet() {
        console.log('Hi, I am ' + this.name);
    },
};

const printName = ({ name, age }) => {
    console.log(name, age);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);