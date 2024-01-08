import { getDishes, getDishesByCategory, getDishesOfTheDay } from "../Dao/DB/dishes.service.js"


/*export const getMenu = async (req, res) => {
    let menu = await getDishes();

    res.render('menu', {...menu});
}*/

//export const getSpecificMenu = async (req, res) => {
export const getMenu = async (req, res) => {
    try {
        let category = req.params.category || 'entrada';
        let menu = await getDishes();

        res.render('menu', { menu, category, user: req.user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const dishMaker = async (req, res) => {
    res.render('dishMaker', {user: req.user});
}

/*export const getMenuOfTheDay = async (req, res) => {
    let menu = await getDishesOfTheDay();

    res.render('menu', {...menu});
}*/