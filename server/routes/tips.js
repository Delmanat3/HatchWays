const tips = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const _id = require('../helpers/uuid');
const tippers="./db/tips.json"

// GET Route for retrieving all the tips
tips.get('/', (req, res) => {
  readFromFile(tippers).then((data) => res.status(200).json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
tips.post('/', (req, res) => {
  const { username, topic, tip } = req.body;
  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: _id(),
    };

    readAndAppend(newTip, tippers);
    res.status(200).json(`Tip added successfully 🚀`);
  } else {
    res.status(500).json({message:"es ist ein wenig ausstellen"})
  }
});

module.exports = tips;
