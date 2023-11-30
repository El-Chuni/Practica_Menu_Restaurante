import { URL } from 'url';
import { dirname } from 'path';

const __filename = new URL(import.meta.url).pathname;
export const __dirname = dirname(__filename);

export const ensureUser = (req, res, next) => {
    if (req.user && req.user.role !== 'admin') {
        return next();
    } else {
        return res.sendStatus(401);
    }
};
