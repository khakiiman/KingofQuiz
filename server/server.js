const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const geography = require('./geography');
const math = require('./math');
const animalSpecies = require('./animalSpecies');
const landmark = require('./landmark');
const history = require('./history');
const science = require('./science');
const animalSounds = require('./animalSounds');
const animalDesc = require('./animalDesc');
const chemicalElements = require('./chemicalElements');

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/questions/:category', (req, res) => {
  const category = req.params.category;

  if (category === 'geography') {
    res.json(geography);
  } else if (category === 'math') {
    res.json(math);
  } else if (category === 'animalSpecies') {
    res.json(animalSpecies);
  } else if (category === 'landmark') {
    res.json(landmark);
  } else if (category === 'history') {
    res.json(history);
  } else if (category === 'science') {
    res.json(science);
  } else if (category === 'animalSounds') {
    res.json(animalSounds);
  } else if (category === 'animalDesc') {
    res.json(animalDesc);
  } else if (category === 'chemicalElements') {
    res.json(chemicalElements);
  } else {
    res.status(400);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
