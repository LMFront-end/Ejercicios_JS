//exercises

let a, b, rest;

[a, b] = [2, 3, 5, 7, 8];
console.log(a);
console.log(b);
console.log(rest);


const FavFood = ["Rice", "Spaguetti", "Chicken", "salad", ""];

const [, , Spaguetti] = FavFood;


const person = {
    name: "Lina",
    lastname: "Guerrero",
    age: 22,
    email: "guerrol@gmail.com",
    phone: 312873636
}

const { phone, ...person2 } = person;

console.log(person);
console.log(person2);