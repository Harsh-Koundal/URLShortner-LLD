import { Router } from "express";
import { urlController } from "../controllers/urlController.js";

const router = Router();

const controller = new urlController();

router.post("/",controller.create.bind(controller));


export default router;