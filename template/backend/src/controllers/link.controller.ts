import { RequestHandler } from 'express';
import { LinkService } from '@/services/link.service';

export class LinkController {
  private service: LinkService;

  constructor() {
    this.service = new LinkService();
  }

  getShortLink: RequestHandler = async (req, res) => {
    const links = await this.service.getShortLink(req);
    if (links) {
      res.status(301).redirect(`${links.original_url}`);
    } else {
      res.status(404).send({ error: 'short_url not found' });
    }
  };
  createLink: RequestHandler = async (req, res): Promise<void> => {
    const resUrl = await this.service.createLink(req.body);
    res.send(resUrl);
  };
}
