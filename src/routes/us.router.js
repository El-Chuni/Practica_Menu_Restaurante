import { Router } from "express";
import { ensureUser } from "../utils";


const router = Router();

router.get('/', async (req, res) => {

    res.render("us");
})


router.get('/contacto', async (req, res) => {

    res.render("contact");
})

export default router;