import type{ Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.js";

export function errorMiddleware(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction
){
    console.error(err);

    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            sucess: false,
            message: err.message,
        });
    }

    return res.status(500).json({
        sucess:false,
        message: "Internal Server Error",
    });
}