import { dishModel } from "./models/dishes.js";

const getDishes = async () => dishModel.find();

const getDishById = async (did) => dishModel.findById(did);

const getDishesByCategory = async (category) => dishModel.find({ category: category });

const getDishesOfTheDay = async () => {
  let fechaActual = new Date();
  let diaDeLaSemana = fechaActual.getDay();
  let diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  let dia = diasSemana[diaDeLaSemana]

  let platos = await dishModel.find({ dishOfTheDay: dia });

  return platos;
}

const addDish = async (body) => {
  try {
      const imagePath = 'public/media/images/' + req.file.originalname;
      
      //Guarda la ruta de la imagen en MongoDB
      const dishData = {
          name: req.body.name,
          description: req.body.description,
          category: req.body.category,
          price: req.body.price,
          portrait: imagePath
      };

      const createdDish = await dishModel.create(dishData);

      res.json({ success: true, message: 'Plato creado con éxito', dish: createdDish });
  } catch (error) {
      res.status(500).json({ success: false, error: error.message });
  }
};

const updateDishPrice = async (did, update) => dishModel.findOneAndUpdate({_id: did}, {price: update}, {new: true});

const updateDishPortrait = async (did, update) => dishModel.findOneAndUpdate({_id: did}, {portrait: update}, {new: true});

const deleteDish = async (did) => {
    try {
        await dishModel.deleteOne({ _id: did });
      } catch (error) {
        console.log(error);
        throw new Error('Error deleting dish');
      }
}

export { getDishes, getDishById, getDishesByCategory, getDishesOfTheDay, addDish, updateDishPrice, updateDishPortrait, deleteDish }