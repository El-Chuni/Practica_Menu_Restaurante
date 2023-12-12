import express from "express";
import session from "express-session";
import Handlebars from 'express-handlebars';
import menuRouter from './routes/menu.router.js';
import userRouter from './routes/users.router.js';
import usRouter from './routes/us.router.js';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import MongoStore from 'connect-mongo';
import config from "./config/config.js";
import { __dirname } from "./utils.js";

const app = express();
const SERVER_PORT = config.port;

const server = app.listen(SERVER_PORT, () => {
    console.log('Server iniciado.');
});

app.engine('handlebars', Handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));

app.use(session({
    store:MongoStore.create({
        mongoUrl: config.mongoUrl,
        mongoOptions:{useNewUrlParser: true, useUnifiedTopology: true},
        ttl:60
    }),
    secret: 'eat-this',
    resave: true,
    saveUninitialized:true
}));

app.use('/menu', menuRouter);
app.use('/usuario', userRouter);
app.use('/nosotros', usRouter);

app.get('/', (req, res) => {
    res.redirect('/menu/');
})

const connectMongoDB = async () => {
    try {
        await mongoose.connect(config.mongoUrl);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error("Error de conexión con MongoDB.")
        process.exit();
    }
};
connectMongoDB();