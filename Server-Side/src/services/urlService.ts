import { UrlRepository } from "../repository/urlRepository.js";
import { generateShortCode } from "../config/generateShortCode.js";

export class UrlService {
    private repository = new UrlRepository();

    async createShortUrl(longUrl: string) {
        let shortCode = generateShortCode();

        while (await this.repository.findByShortCode(shortCode)) {
            shortCode = generateShortCode();
        }

        return this.repository.create(shortCode, longUrl);
    }
}