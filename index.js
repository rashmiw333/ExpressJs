const express = require("express");
const { title } = require("node:process");
const app = express();

app.use(express.json())

//Task1
app.get("/",(req,res)=>{
    res.send("Hello, Express server.");
})

//Task2

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

];

app.post("/books",(req,res)=>{
    const newBook = req.body;
    if(!newBook.title || !newBook.author|| !newBook.year){
      res.status(400).json({error: "title,author,year are required"});
    }else{
        books.push(newBook)
        res.status(201).json({message: "Book added Successfully.",book:newBook});

    }
});

//Task3
app.get("/books",(req,res)=>{
    res.send(books);
});

//Task4
const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' },
];

app.post("/todos",(req,res)=>{
    const newTodo = req.body;

    if(!newTodo.title||!newTodo.day){
        res.status(400).json({error: "title,day are required"});
    }else{
       todos.push(newTodo) 
       res.status(201).json({message: "Todo added Successfully.",todo:newTodo});
    }
});

//Task5
app.get("/todos",(req,res)=>{
    res.send(todos);
});


const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})