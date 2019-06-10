// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"]
let age = 100
let age2 = age
//console.log(age, age2)
// and we want to make a copy of it.
const team = players
//console.table(team, players)

// You might think we can just do something like this:
team[3] = "lux"
//console.log(players)
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
// one way

// or create a new array and concat the old one in
const team4 = [].concat(players)
// or use the new ES6 Spread
const team3 = [...players]
team[4] = "heee haww"

const team5 = Array.from(players)
//console.log(players)
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Alex Bosh",
  age: 25
}

// and think we make a copy:
const captain = person
captain.age = 99
//console.log(person)
// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 29 })
//console.log(captain2)
// We will hopefully soon see the object ...spread
const captain3 = { ...person }
console.log(captain3)
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

//JSON.parseway
const captain4 = JSON.parse(JSON.stringify(person))
console.log(captain4)
