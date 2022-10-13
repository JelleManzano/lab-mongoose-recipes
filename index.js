const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    //? Iteración 2
    /*return Recipe.create({
      title: "Tortilla de Patata",
      level:"Easy Peasy",
      ingredients : ["huevo","cebolla","patata", "aceite", "sal"],
      cuisine: "spanish",
      dishType: "main_course",
      image : "https://static2.abc.es/media/bienestar/2020/05/22/tortilla-patatas-k9tF--1200x630@abc.jpeg",
      duration: 20,
      creator: "la abuela"
    })*/
    //return Recipe.deleteMany()
    //?Iteración 3
    //return Recipe.insertMany(data)
    //?Iteración 4
    //return Recipe.findByIdAndUpdate("63483149a0f26987b7f2d747", {duration: 100}, {new:true})
    //?Iteración 5
    //return Recipe.deleteOne({title:"Carrot Cake"})
    //? Iteración 6

  })
  .then((response) => {
        //? CLG iteración 4: console.log("Updated Rigattoni", response)
        console.log(response)
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  mongoose.connection.close(function () {
    console.log('Mongoose default connection closed');
  });
  

