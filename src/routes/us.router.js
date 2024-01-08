import { Router } from "express";
import { ensureUser } from "../utils.js";
import { sendMailToContact } from "../controllers/email.controller.js";


const router = Router();

router.get('/', async (req, res) => {

    res.render("us", {user: req.user});
})


router.get('/contacto', async (req, res) => {

    res.render("contact", {user: req.user});
})

router.post('/contacto', sendMailToContact)


export default router;