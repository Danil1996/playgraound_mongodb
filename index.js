"use strickt";

const mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    console.log("Connection error: ", err);
    throw err;
  }

  console.log("Connected");

  client.close();
});

const db = client.db("db_playgraund");
const users = db.createCollection("users_info");

users.insertOne(
  {
    _id: 1,
    login: "danilkit48",
    name: "Danya",
    gender: "male",
    age: 24,
    email: "danilkit48@gmail.com",
  },
  (err, result) => {
    if (err) {
      console.log("Unable insert user: ", err);
      throw err;
    } else {
      console.log("result", result);
    }
  }
);
