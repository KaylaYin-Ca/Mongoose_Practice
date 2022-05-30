// ============use the mongoose ===============


const mongoose = require('mongoose');
// if doesn't exist , create a brand new one
mongoose.connect('mongodb://localhost:27017/fruitsDB', {
  useNewUrlParser: true
});


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check the entry,there is no name!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});


const Person = mongoose.model("Person", personSchema);
const Fruit = mongoose.model("Fruit", fruitSchema);


// person.save();

//delete many
// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully deleted the document!");
//   }
// });


const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Awesome!"
});
// kiwi.save();

const organge = new Fruit({
  name: "Orange",
  rating: 7,
  review: "Good."
});
const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Soft."
});


const person = new Person({
  name: "John",
  age: 23
});

Person.updateOne({
  name:"John"
}, {
  favoriteFruit: banana
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully updated the document");
  }
});

// person.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully saved the document");
//   }
// });

// fruit.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("save successfully1");
//   }
// });

//update
// Fruit.updateOne({
//   _id: "6294663554298b8989eefd88"
// }, {
//   name: "Tomato"
// }, function(err) {
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("successfully updated the document");
//   }
// });

// remove
// Fruit.deleteOne({
//   name:"Pears"
// }, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted");
//   }
// });

// // Insert fruits operation
// Fruit.insertMany([organge,banana],function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // close the connection of mongodb
    // Notice : once finish the operation close the connection

    fruits.forEach(function(fruit) {
      console.log(fruit);
    });
    mongoose.connection.close();
    // console.log(fruits); // log in format of javascript
  }
});
