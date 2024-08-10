import { appDataSource } from '@/config/dataSource';
const { v4: uuidv4 } = require('uuid');
import { Url } from '@/entities/link';
import { Request } from 'express';

export class LinkService {
  getShortLink = async (data: Request) => {
    const linkRepo = appDataSource.getRepository(Url);
    const link = await linkRepo.findOneBy({ short_url: data.params.shortUrl });
    return link;
  };

  generateUrl = async (): Promise<string> => {
    const linkRepo = appDataSource.getRepository(Url);
    const shortUrl = uuidv4().replace(/-/g, '').substring(0, 8);
    const checkDublicated = await linkRepo.findOneBy({ short_url: shortUrl });
    if (checkDublicated) {
      return this.generateUrl();
    }
    return shortUrl;
  };

  createLink = async (data: { original_url: string }) => {
    const linkRepo = appDataSource.getRepository(Url);
    const objData = {
      id: uuidv4(),
      short_url: await this.generateUrl(),
      original_url: data.original_url,
    };
    await linkRepo.save(objData);
    return objData;
  };
}
