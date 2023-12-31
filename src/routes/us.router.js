import { Router } from "express";
import { ensureUser } from "../utils.js";
import { sendMailToContact } from "../controllers/email.controller.js";


const router = Router();

router.get('/', async (req, res) => {

    res.render("us");
})


router.get('/contacto', async (req, res) => {

    res.render("contact");
})

router.post('/contacto', sendMailToContact)


export default router;