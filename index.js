const express = require("express");
const app = express();

app.use(express.json())

const cars = [
  { id: 1, make: "Toyota", model: "Camry", year: 2022 },
  { id: 2, make: "Honda", model: "Civic", year: 2023 },
  { id: 3, make: "Ford", model: "Mustang", year: 2021 },
  { id: 4, make: "Chevrolet", model: "Malibu", year: 2022 },
]


app.get("/",(req,res)=>{
    res.send("hello,Express");
})

app.post("/cars",(req,res)=>{
    const newCar = req.body;
    if(!newCar.make || !newCar.model|| !newCar.year){
        res.status(400).json({error: "make,model,year are required"});
    }else{
        cars.push(newCar)
        res.status(201).json({message: "Car added Successfully.",car:newCar});

    }
});
app.get("/cars",(req,res)=>{
    res.send(cars);
});

app.delete("/cars/:id",(req,res)=>{
    const carId = req.params.id
    console.log(carId);
    const index = cars.findIndex(car=>car.id == carId);
    console.log(index);

    if(index === -1){
       return res.status(404).json({error: 'Car Not Found'});
    } else{
        cars.splice(index,1)
        res.status(200).json({message:"Car deleted Successfully."})
    }
}
)

const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})