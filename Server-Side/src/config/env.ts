import dotenv from "dotenv";

dotenv.config();


export const env = {
    PORT: Number(process.env.PORT),
    DB_URI: process.env.DB_URI,
    BASE_URL: process.env.BASE_URL,
};
