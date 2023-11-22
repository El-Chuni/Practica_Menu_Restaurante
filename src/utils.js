const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const ensureUser = (req, res, next) => {
    if (req.user && req.user.role != 'admin') {
        return next();
    } else {
        return res.send(401);
    }
}