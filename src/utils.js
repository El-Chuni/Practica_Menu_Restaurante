import { URL, fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const ensureUser = (req, res, next) => {
    if (req.user && req.user.role !== 'admin') {
        return next();
    } else {
        return res.sendStatus(401);
    }
};
