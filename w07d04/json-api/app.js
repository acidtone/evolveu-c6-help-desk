const mongoose = require('./connection');
const express = require('express');
const app = express();

const animals = require('./data/animals');
const Definition = require('./models/definition');

app.get('/',(req, res)=>{
  res.send('hello world!');
})

app.get('/animals', (req, res) => {
  res.send(animals);
})

app.get('/definitions', (req, res) => {
  Definition.find(function(err,definitions){
    if (err) {
      res.sendStatus(404);
    }
    console.log(definitions);
    res.json(definitions);
  })
})

app.get('/definitions/:slug', (req, res) => {
  Definition.find({slug: req.params.slug},function(err,definition){
    if (err) {
      res.sendStatus(404);
    }
    res.json(definition);
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});