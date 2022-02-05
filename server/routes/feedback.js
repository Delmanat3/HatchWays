const fb = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const _id = require("../helpers/uuid");
const db = require("../db/feedback.json");
const fs = require("fs"); //shouldnt have too but importing this was just faster than changing the helper

const feed = "./db/feedback.json";

// GET Route for retrieving all the feedback
fb.get("/", (req, res) => {
  console.info(`${req.method} request received for feedback`);
  readFromFile(feed).then((data) => res.status(200).json(JSON.parse(data)));
});

// POST Route for submitting feedback
fb.post("/", (req, res) => {
  // Log that a POST request was received

  // Destructuring assignment for the items in req.body
  const { email, feedbackType, feedback } = req.body;

  // If all the required properties are present
  if (email && feedbackType && feedback) {
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: _id(),
    };

    readAndAppend(newFeedback, feed);

    const response = {
      body: newFeedback,
    };

    res.status(200).json(response);
  } else {
    res.status(500).json({ message: " es ist nicht sehr gut " });
  }
});
//DELETE route
fb.delete("/:id", (req, res) => {
  for (i = 0; i < db.length; i++) {
    if (db[i].feedback_id == req.params.id) {
      db.splice(i, 1);
      
    }
  }

  fs.writeFile(feed, JSON.stringify(db), (err) => {
    if (err) {
      res.status(500).json({ message: " es ist nicht sehr gut " });
    } else {
      res.status(200).json(db);
    }
  });
});
fb.get("/:id", (req, res) => {
  const {

    email,
    feedbackType,
    feedback,
    feedback_id
  }=req.body
  if(email && feedbackType && feedback ){
  const reqData={
    email:req.body.email,
    feedbackType:req.body.feedbackType,
    feedback:req.body.feedback,
    feedback_id:req.params.id
  }
    for (i = 0; i < db.length; i++) {
      if (db[i].feedback_id == req.params.id) {
        db.splice(i, 1, reqData);     
      }
    }
   } 
    fs.writeFile(feed, JSON.stringify(db), (err) => {
      if (err) {
        res.status(500).json({ message:err+ " es ist nicht sehr gut " });
      } else {
        res.status(200).json(db);
      }
    });
  });
module.exports = fb;
