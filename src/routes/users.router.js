import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/register', passport.authenticate('signup', { session:false }),
    async (req, res, next) => {
        res.json({
            message: 'Registro hecho con exito.',
            user: req.user
        })
    }
);

router.post('/login', async (req, res, next) => {
    passport.authenticate(
        'login',
        async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('Ocurrió un error.');

                    return next(error);
                }

                req.login(
                    user,
                    { session: false },
                    async (error) => {
                        if (error) return next(error);

                        const body = { _id: user._id, email: user.email };
                        const token = jwt.sign({ user: body }, 'this_is_my_secret');

                        return res.json({ token });
                    }
                );
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next);
});

export default router;