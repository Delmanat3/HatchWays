const express = require('express');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const db = require("./db/feedback.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clog)
app.use('/api', api);
module.exports=app