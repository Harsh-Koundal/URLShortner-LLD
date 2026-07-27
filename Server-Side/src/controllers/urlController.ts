import type{ Request,Response } from "express";
import { UrlService } from "../services/urlService.js";
import { env } from "../config/env.js";

const service = new UrlService();

export class urlController{
    async create(req:Request, res:Response){
        const {longUrl} = req.body;

        if(!longUrl){
            return res.status(400).json({
                sucess:false,
                message:"longUrl is Required",
            });
        }

        const url = await service.createShortUrl(longUrl);

        return res.status(201).json({
            sucess:true,
            data:{
                shortCode: url.shortCode,
                shortUrl: `${env.BASE_URL}/${url.shortCode}`,
                longUrl:url.longUrl,
            },
        });
    }
}