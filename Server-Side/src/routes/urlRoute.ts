import { Router } from "express";
import { urlController } from "../controllers/urlController.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validate } from "../middlewares/validate.js";
import { createShortUrlSchema } from "../validations/urlValidation.js";

const router = Router();

const controller = new urlController();

router.post("/",validate(createShortUrlSchema),asyncHandler(controller.create.bind(controller)));

router.get("/:shortCode", asyncHandler(controller.redirect.bind(controller)));


export default router;