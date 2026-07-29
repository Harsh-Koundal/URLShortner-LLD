import { UrlRepository } from "../repository/urlRepository.js";
import { generateShortCode } from "../config/generateShortCode.js";
import { AppError } from "../utils/appError.js";

export class UrlService {
    private repository = new UrlRepository();

    async createShortUrl(longUrl: string) {
        const MAX_RETRIES = 5;

        for(let attempt=1;attempt<=MAX_RETRIES;attempt++){
            try{
                const shortCode = generateShortCode();

                return await this.repository.create(
                    shortCode,
                    longUrl,
                );
            }catch(error:any){
                if(error.code==="P2002"){
                    continue;
                }

                throw error;
            }
        }

        throw new AppError(500,"Unable to generate a unique short URL. Please try again.");
    }


    async getLongUrl(shortCode: string){
        const url = await this.repository.findByShortCode(shortCode);

        if(!url){
            throw new AppError(404,"Short URL not found");
        }

        if(url.expiresAt && url.expiresAt < new Date()){
            throw new AppError(410,"This Link Has Expired");
        }

        await this.repository.incrementClickCount(url.id);

        return url
    }
}