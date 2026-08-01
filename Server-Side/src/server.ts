import express from "express";
import cors from "cors";
import { env } from "./config/env.js";

import urlRoute from "./routes/urlRoute.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { logger } from "./config/logger.js";
import PinoHttp, { pinoHttp } from "pino-http";
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

// API Routes 

app.use("/",urlRoute);


// error Handler
app.use(errorMiddleware);

app.use(pinoHttp({logger}));
const PORT = env.PORT;
app.listen(PORT,()=>{
    logger.info(`Server Running on Port ${env.PORT}`);
});


