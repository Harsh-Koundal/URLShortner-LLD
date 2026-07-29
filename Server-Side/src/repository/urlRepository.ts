import {prisma} from "../config/prisma.js";

export class UrlRepository{
    async create(shortCode:string, longUrl:string){
        return prisma.url.create({
            data:{
                shortCode,
                longUrl,
            },
        });
    }

    async findByShortCode(shortCode: string){
        return prisma.url.findUnique({
            where:{
                shortCode,
            }
        })
    }

    async incrementClickCount(id:string){
        return prisma.url.update({
            where:{id},
            data:{
                clickCount:{
                    increment:1,
                }
            }
        })
    }
}