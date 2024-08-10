import App from './app';
import logger from './middlewares/logger';
import {LinkRoute} from "@/routes/link.route";
import validate from "@/middlewares/validate";
import cors from 'cors';


const app = new App({
    port: 8000,
    middlewares: [logger(), cors(),validate()],
    controllers: [new LinkRoute()],
});

app.listen();
