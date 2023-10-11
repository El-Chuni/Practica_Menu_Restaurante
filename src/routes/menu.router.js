import { Router } from "express";
import { addDish, getDishById, updateDishPortrait, updateDishPrice } from "../Dao/DB/dishes.service";
import { getMenu, getMenuOfTheDay, getSpecificMenu } from "../controllers/menu.controller";

const router = Router();

router.get('/', getMenu);

//router.get('/:category', getSpecificMenu);

router.get('/platoDelDia', getMenuOfTheDay);

router.get('/plato/:did', getDishById);

router.post('/', addDish);

router.put('/plato/:did/price', updateDishPrice);

router.put('/plato/:did/portrait', updateDishPortrait);

export default router;