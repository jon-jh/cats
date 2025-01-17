// data in memory
const catBreeds = {
  'Balinese': "Balinese are curious.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking."
};

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it (easy peezee, butter squeezy) ...
  return catBreeds[breed];
};

// get the return value right away from the function
const bombay = breedDetails('Bombay');
console.log(bombay); //=> prints out the description for that breed