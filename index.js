const express = require("express");
const { title } = require("node:process");
const app = express();

app.use(express.json())

//Task1
app.get("/",(req,res)=>{
    res.send("Hello, Express server.");
})

//Task2

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
];

app.delete("/movies/:id",(req,res)=>{
    const movieId = req.params.id
    console.log(movieId);
    const index = movies.findIndex(movie=>movie.id == movieId);
    console.log(index);

    if(index === -1){
       return res.status(404).json({error: 'movie Not Found'});
    } else{
        movies.splice(index,1)
        res.status(200).json({message:"Movie deleted Successfully."});
    }
})

//Task3
app.get("/movies",(req,res)=>{
    res.send(movies);
});

//Task4
const items = [
 { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },
 { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }
];

app.delete("/items/:id",(req,res)=>{
    const itemId = req.params.id
    console.log(itemId);
    const index = items.findIndex(item=>item.id == itemId);
    console.log(index);

    if(index === -1){
       return res.status(404).json({error: 'Item Not Found'});
    } else{
        items.splice(index,1)
        res.status(200).json({message:"Item deleted Successfully."});
    }
})

//Task5
app.get("/items",(req,res)=>{
    res.send(items);
});


const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
