"use strickt";

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "myproject";

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function () {
    client.close();
  });
});

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("documents");
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};

// const db = client.db("db_playgraund");
// const users = db.createCollection("users_info");

// users.insertOne(
//   {
//     _id: 1,
//     login: "danilkit48",
//     name: "Danya",
//     gender: "male",
//     age: 24,
//     email: "danilkit48@gmail.com",
//   },
//   (err, result) => {
//     if (err) {
//       console.log("Unable insert user: ", err);
//       throw err;
//     } else {
//       console.log("result", result);
//     }
//   }
// );
