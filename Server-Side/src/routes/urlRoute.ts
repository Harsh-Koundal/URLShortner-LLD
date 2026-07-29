import { Router } from "express";
import { UrlController } from "../controllers/urlController.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middlewares/validate.js";
import { createShortUrlSchema } from "../validations/urlValidation.js";
import { urlController } from "../container.js";
const router = Router();


router.post("/",validate(createShortUrlSchema),asyncHandler(urlController.create.bind(urlController)));

router.get("/:shortCode", asyncHandler(urlController.redirect.bind(urlController)));


export default router;