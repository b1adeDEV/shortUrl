import { Router } from 'express';
import { IRoute } from '../interfaces/IRoute.interface';
import {LinkController} from "@/controllers/link.controller";

export class LinkRoute implements IRoute {
    public path = '/url';
    public router = Router();
    private controller: LinkController;

    constructor() {
        this.controller = new LinkController();
        this.init();
    }

    private init() {
        this.router.post('/links', this.controller.createLink);
        this.router.get('/:shortUrl',this.controller.getShortLink);
    }
}
