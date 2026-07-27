import express from "express";
import cors from "cors";
import { env } from "./config/env.js";

const app = express();

app.use(cors({
    origin:process.env.BASE_URL,
    Credential:true,
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.status(200).json({
        sucess:true,
        status:"ok",
        message: "URL Shortener API is running 🚀",
    });
});

const PORT = env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${env.PORT}`);
});


