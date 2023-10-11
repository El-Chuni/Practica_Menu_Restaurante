import { getDishes, getDishesByCategory, getDishesOfTheDay } from "../Dao/DB/dishes.service"


/*export const getMenu = async (req, res) => {
    let menu = await getDishes();

    res.render('menu', {...menu});
}*/

//export const getSpecificMenu = async (req, res) => {
export const getMenu = async (req, res) => {
    let menu = await getDishes();
    let category = req.params.category;
    //let menu = await getDishesByCategory(category);

    res.render('menu', {menu, selectedCategory});
}

/*export const getMenuOfTheDay = async (req, res) => {
    let menu = await getDishesOfTheDay();

    res.render('menu', {...menu});
}*/