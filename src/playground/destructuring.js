// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Mumbai',
//         temp: 76
//     }
// };

// const {name:firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`)


// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`)
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName); 

const address = ['1299 J B Road','Mumbai', 'Maharashtra', '400015' ];
const [, city, state = 'New Mumbai'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
