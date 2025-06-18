import express from "express";
import cors from "cors";

let app = express();
app.use(cors())
app.use(express.json({
    origin:"http://localhost:5173"
}));

app.get("/",(_req,res)=>{
    res.send("Hello world!")
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    res.status(200).json({ message: "Data received" })
})

app.listen(8000,()=>{
    console.log("server is running on localhost:8000")
})