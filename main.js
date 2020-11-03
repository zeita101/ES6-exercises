//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

let arrEven = [0, 2, 4, 6, 8];
let arrOdd = [1, 3, 5, 7, 9];

const newArr = [...arrOdd, ...arrEven] ;
console.log(...newArr);


//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

favFood = { sushi: 'Rakuzen', fries: 'McDonalds', cheesecake: 'Costco' }
friendFavFood = { pizza: '2 Bros', cake: 'Lords Bakery', potatoes: 'Loaded Potato' }

food = {...favFood, ...friendFavFood };
console.log(food);

// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 


favMovie = {
  name: 'Moses', 
  age: '24', 
  hometown: 'Egypt'
}
const { name, age, ...me } = favMovie
console.log(name, age, me.hometown);

const pet = {}
favMovie = { ...favMovie, pet }
let petName = 'Mickey'
let petAge = 7
let petBreed = 'Huskie'
favMovie.pet.Name = petName
favMovie.pet.Age = petAge
favMovie.pet.Breed = petBreed
console.log(favMovie.pet.Name)


