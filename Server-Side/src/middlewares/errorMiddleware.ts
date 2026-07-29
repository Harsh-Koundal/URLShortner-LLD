import { Request, Response, NextFunction } from "express";

export function errorMiddleware(
    err:any,
    req:Request,
    res:Response,
    next:NextFunction
){
    console.error(err);

    return res.status(500).json({
        sucess:false,
        message: "Internal Server Error",
    });
}