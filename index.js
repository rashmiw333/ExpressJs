const express = require("express");
const { title } = require("node:process");
const app = express();

app.use(express.json())

//Task1
app.get("/",(req,res)=>{
    res.send("Express server.");
})

//Task2

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
];

app.post("/movies",(req,res)=>{
    const newMovie = req.body;
    if(!newMovie.title || !newMovie.director|| !newMovie.year){
      res.status(400).json({error: "title,director,year are required"});
    }else{
        movies.push(newMovie)
        res.status(201).json({message: "Movie added Successfully.",movie:newMovie});

    }
});

//Task3
app.get("/movies",(req,res)=>{
    res.send(movies);
});

//Task4
const items = [
 { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }
];

app.post("/items",(req,res)=>{
    const newItem = req.body;

    if(!newItem.itemName||!newItem.color||!newItem.quantity){
        res.status(400).json({error: "itemName,color,quantity are required"});
    }else{
       items.push(newItem) 
       res.status(201).json({message: "Item added Successfully.",item:newItem});
    }
});

//Task5
app.get("/items",(req,res)=>{
    res.send(items);
});


const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
