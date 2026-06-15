const express = require("express");
const { title } = require("node:process");
const app = express();

app.use(express.json())

//Task1
app.get("/",(req,res)=>{
    res.send("Hello, From Express Server.");
})

//Task2

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
];

app.delete("/books/:id",(req,res)=>{
    const bookId = req.params.id
    console.log(bookId);
    const index = books.findIndex(book=>book.id == bookId);
    console.log(index);

    if(index === -1){
       return res.status(404).json({error: 'Book Not Found'});
    } else{
        books.splice(index,1)
        res.status(200).json({message:"Book deleted Successfully."});
    }
})

//Task 3
app.get("/books",(req,res)=>{
    res.send(books);
});

//Task4
const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' },
  { id: 2, title: 'Go for a walk', day: 'Sunday' }
];


app.delete("/todos/:id",(req,res)=>{
    const todoId = req.params.id
    console.log(todoId);
    const index = todos.findIndex(todo=>todo.id == todoId);
    console.log(index);

    if(index === -1){
       return res.status(404).json({error: 'todo Not Found'});
    } else{
        todos.splice(index,1)
        res.status(200).json({message:"Todo deleted Successfully."});
    }
})

//Task5
app.get("/todos",(req,res)=>{
    res.send(todos);
});



const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
