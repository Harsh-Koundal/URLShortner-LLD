import { UrlRepository } from "./repository/urlRepository.js";
import { UrlService } from "./services/urlService.js";
import { UrlController } from "./controllers/urlController.js";

const urlRepository = new UrlRepository();
const urlService = new UrlService(urlRepository);
const urlController = new UrlController(urlService);

export { urlController };