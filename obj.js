
  function createInstructor(firstName, lastName){
      return { 
          firstName, lastName
      }
  }


let favoriteNumber = 42;
let instructor = {
    [favoriteNumber] : "That's me!"
}
instructor.favoriteNumber; 



  let instructor = { 
      firstName : "Colt",
      sayHi() {
          return "Hi!"
      },
      sayBye() {
          return this.firstName + " says bye!"
      }
  };


 
  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

//species: the species of animal (‘cat’, ‘dog’)
//verb: a string used to name a function (‘bark’, ‘bleet’)
//noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
}