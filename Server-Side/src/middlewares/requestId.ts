import { randomUUID } from "crypto";
import type { Request, Response, NextFunction } from "express";

export function requestId(
    req:Request,
    res:Response,
    next:NextFunction
){
    req.id = randomUUID();

    res.setHeader("X-Request-ID", req.id);

    next();
}