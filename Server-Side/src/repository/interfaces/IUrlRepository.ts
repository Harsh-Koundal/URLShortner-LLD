import type{ Url } from "@prisma/client";
export interface IUrlRepository {
    create(data: {
        shortCode: string;
        longUrl: string;
    }): Promise<Url>;

    findByShortCode(shortCode: string): Promise<Url | null>;

    incrementClickCount(id: string): Promise<void>;
}