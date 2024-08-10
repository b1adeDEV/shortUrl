import { RequestHandler } from 'express';

const logger = (): RequestHandler => (req, res, next) => {
  console.log(`Request logged: ${req}, ${req}`);
  next();
};

export default logger;
