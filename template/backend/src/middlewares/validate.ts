import { RequestHandler } from 'express';

const validate = (): RequestHandler => (req, res, next) => {
    if(req.body.original_url == "" ) {
        res.status(400).send({"error": "Invalid value in original_url" });
    } else {
        next();
    }
};

export default validate;
