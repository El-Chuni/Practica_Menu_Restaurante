import mongoose from "mongoose";

const dishesCollection = 'dishes';

const StringAndRequired = {
    type: String,
    require: true
}

const dishSchema = new mongoose.Schema({
    name: StringAndRequired,
    description: StringAndRequired,
    price: {
        type: Number,
        require: true
    },
    portrait: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: 'entrada',
        enum: ['entrada', 'carne', 'pasta', 'verdura', 'bebidaConAlcohol', 'bebidaSinAlcohol', 'postre']
    },
    dishOfTheDay: {
        type: String,
        default: '',
        enum: ['', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
    }
})

export const dishModel = mongoose.model(dishesCollection, dishSchema)