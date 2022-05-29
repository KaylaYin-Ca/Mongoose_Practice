
// ============use the mongoose ===============


const mongoose = require('mongoose');
// if doesn't exist , create a brand new one
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser:true});

const personSchema = new mongoose.Schema({
  name: String,
  age : Number
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number,
  review: String
});

const Person = mongoose.model("Person",personSchema);
const Fruit = mongoose.model("Fruit",fruitSchema);

const person = new Person({
  name: "John",
  age : 35
});

// person.save();

const kiwi = new Fruit({
  name:"Kiwi",
  rating:10,
  review:"Awesome!"
});
// kiwi.save();

const organge = new Fruit({
  name:"Orange",
  rating:7,
  review:"Good."
});
const banana = new Fruit({
  name:"Banana",
  rating:9,
  review:"Soft."
});

Fruit.insertMany([organge,banana],function(err){
  if (err){
    console.log(err);
  }else{
    console.log("successfully saved all the fruits to fruitsDB");
  }
});







// ==========the original driver =============
// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert"); // for testing
//
// // Connection URI
// const uri =
//   "mongodb://localhost:27017";
// // database name
// const dbName = "fruitsDB"
// // Create a new MongoClient
// const client = new MongoClient(uri);
//
//
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("connected successfully to server");
//
//   const db = client.db(dbName);
//
//   // insert document
//   // insertDocuments(db, function() {
//   //   client.close(); // once the inset document down, close the database clients
//   // });
//
//   // query documents
//   findDocuments(db,function(){
//     client.close();
//   });
//
//   // client.close();
// });
//
// // insert operations
// const insertDocuments = function(db, callback) {
//   const fruits = db.collection("fruits");
//   // create a document to insert
//   const docs = [{
//       name: "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name: "Orange",
//       score: 6,
//       review: "Kinda sour"
//     },
//     {
//       name: "Banana",
//       score: 9,
//       review: "Great stuff!"
//     }
//   ];
//   // this option prevents additional documents from being inserted if one fails
//   const options = {
//     ordered: true
//   };
//   fruits.insertMany(docs, options, function(err, result) {
//     // for validation
//     assert.equal(err, null), // make sure no errors.
//       assert.equal(3, result.insertedCount); // ensure has three inserts
//     // assert.equal(3, result.ops.length);
//     //
//     console.log("insert 3 columns into the collection");
//     callback(result);
//   });
// }
//
// // query operations
// const findDocuments = function(db, callback) {
//   // get collection
//   const collection = db.collection("fruits");
//   // find some documents
//   collection.find({}).toArray(function(err,fruits){
//     assert.equal(err,null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// }
