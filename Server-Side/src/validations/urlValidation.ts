import type { create } from "node:domain";
import {z} from "zod";

export const createShortUrlSchema = z.object({
    longUrl:z
     .string()
     .trim()
     .url("Please Provide a Valid URL")
     .max(2048, "URL is Too Long"),
});

export type createShortUrlInput = z.infer<typeof create>;