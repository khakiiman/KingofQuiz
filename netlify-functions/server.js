const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// DatBase Files
const geography = require('../server/geography');
const math = require('../server/math');
const animalSpecies = require('../server/animalSpecies');
const landmark = require('../server/landmark');
const history = require('../server/history');
const science = require('../server/science');
const animalSounds = require('../server/animalSounds');
const animalDesc = require('../server/animalDesc');
const chemicalElements = require('../server/chemicalElements');

const app = express();
const port = process.env.PORT || 9000;

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
