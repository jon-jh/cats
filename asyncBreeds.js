const fs = require('fs');

const getDataFromFile = function(breed, done) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) done(data);

  });
};

const detailPrinter = breed => {
  console.log(breed);
};

getDataFromFile('balinese', detailPrinter);

//this code grabs the text from the specified file (breed) when we call it using the file name (which are bombay or balinese in this case)