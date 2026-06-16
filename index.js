const express = require("express");
const app = express();

app.use(express.json())

//Task1
app.get("/",(req,res)=>{
    res.send("Hello, This is Express Assignment Server.")
});

//Task2
const albums = [
  { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
  { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
  { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
];

app.post("/albums",(req,res)=>{
    const newAlbum = req.body;
    if(!newAlbum.title || !newAlbum.artist|| !newAlbum.year){
      res.status(400).json({error: "title,artist,year are required"});
    }else{
        albums.push(newAlbum)
        res.status(201).json({message: "Album added Successfully.",album:newAlbum});

    }
});

//Task3
app.get("/albums",(req,res)=>{
    res.send(albums);
});

//Task4
app.delete("/albums/:id",(req,res)=>{
    const albumId = req.params.id
    console.log(albumId);
    const index = albums.findIndex(item=>item.id == albumId);
    console.log(index);

    if(index === -1){
       return res.status(404).json({error: 'Album Not Found'});
    } else{
        albums.splice(index,1)
        res.status(200).json({message:"Album deleted Successfully."});
    }
})

//Task 5
app.post("/albums/:id",(req,res)=>{
    const albumId = parseInt(req.params.id)
    const updatedAlbumData = req.body

    const albumToUpdate = albums.find(album => album.id === albumId);
    if(!albumToUpdate){
        res.status(404).json({error:"Album not found."})
    }else{
        if(!updatedAlbumData.title || !updatedAlbumData.artist || !updatedAlbumData.year){
            res.status(400).json({error: "title,artist,year are required."})
        }else{
        Object.assign(albumToUpdate,updatedAlbumData);
        res.status(200).json({message:"Album data updated Successfully.",
            album:albumToUpdate})
        }
        
    }
});


const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})