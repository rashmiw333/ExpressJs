const express = require("express");
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

app.post("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id)
    const updatedBookData = req.body

    const bookToupdate = books.find(book => book.id === bookId);
    if(!bookToupdate){
        res.status(404).json({error:"Book not found."})
    }else{
        if(!updatedBookData.title || !updatedBookData.author || !updatedBookData.year){
            res.status(400).json({error: "title,author and year are required."})
        }else{
        Object.assign(bookToupdate,updatedBookData);
        res.status(200).json({message:"Book data updated Successfully.",
            book:bookToupdate})
        }
        
    }
});

//Task 3
app.get("/books",(req,res)=>{
    res.send(books);
});

//Task4
const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' },
  { id: 2, title: 'Go for a walk', day: 'Sunday' }
];

app.post("/todos/:id",(req,res)=>{
    const todoId = parseInt(req.params.id)
    const updatedTodoData = req.body

    const todoToupdate = todos.find(todo => todo.id === todoId);
    if(!todoToupdate){
        res.status(404).json({error:"Todo not found."})
    }else{
        if(!updatedTodoData.title || !updatedTodoData.day){
            res.status(400).json({error: "title,day are required."})
        }else{
        Object.assign(todoToupdate,updatedTodoData);
        res.status(200).json({message:"Todo data updated Successfully.",
            todfo:todoToupdate})
        }
        
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