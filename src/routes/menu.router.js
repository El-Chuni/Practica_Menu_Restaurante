import { Router } from "express";
import { addDish, getDishById, updateDishPortrait, updateDishPrice } from "../Dao/DB/dishes.service";
import { getMenu, getMenuOfTheDay, getSpecificMenu } from "../controllers/menu.controller";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/media/images'); //Para guardar imagenes
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); //Usa el nombre original del archivo como nombre
    }
});

const upload = multer({ storage: storage });

router.get('/', getMenu);

//router.get('/:category', getSpecificMenu);

router.get('/platoDelDia', getMenuOfTheDay);

router.get('/plato/:did', getDishById);

router.post('/', upload.single('portrait'), addDish);

router.put('/plato/:did/price', updateDishPrice);

router.put('/plato/:did/portrait', updateDishPortrait);

export default router;