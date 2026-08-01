import type{ Request,Response } from "express";
import { UrlService } from "../services/urlService.js";
import { env } from "../config/env.js";
import { AppError } from "../utils/appError.js";


export class UrlController{

    constructor(
        private service: UrlService
    ){}
    async create(req:Request, res:Response){
        const {longUrl} = req.body;

        const url = await this.service.createShortUrl(longUrl);

        return res.status(201).json({
            sucess:true,
            data:{
                shortCode: url.shortCode,
                shortUrl: `${env.BASE_URL}/${url.shortCode}`,
                longUrl:url.longUrl,
            },
        });
    }


    async redirect(req:Request, res:Response){
        const { shortCode } = req.params;

        if (typeof shortCode !== "string") {
    throw new AppError(400, "A valid short code is required");
  }

        const url = await this.service.getLongUrl(shortCode);

        return res.redirect(302,url.longUrl);
    }
}