import {
    ZodObject,
    ZodError
} from "zod";
import type{
    Request,
    Response,
    NextFunction
} from "express";

export const validate =
    (schema: ZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                req.body = schema.parse(req.body);

                next();
            } catch (err) {
                if (err instanceof ZodError) {
                    return res.status(400).json({
                        success: false,
                        message: "Validation Failed",
                        errors: err.issues.map((issue) => ({
                            field: issue.path.join("."),
                            message: issue.message,
                        })),
                    });
                }

                next(err);
            }
        }