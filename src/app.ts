import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access';
import Handlebars from 'handlebars';


//Routes
import indexRoutes from './routes';
import tasksRoutes from './routes/tasks';


class Application {

    app: express.Application;


    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }


    //Metodo para configurar el servidor
    settings() {
        this.app.set('port', 3000); 
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            handlebars: allowInsecurePrototypeAccess(Handlebars),
            extname: '.hbs'
        }));
        this.app.set('view engine', '.hbs');
    }


    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }


    routes() {
        this.app.use(indexRoutes);
        this.app.use('/tasks', tasksRoutes);

        this.app.use(express.static(path.join(__dirname, 'public')));
    }


    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }


}

export default Application;


//Hora 1 Min 20


//Comando para correr la aplicación: npx nodemon
//Comando para correr la base de datos: mongod
//Comando para crear la carpeta dist: npx tsc
//Comando para correr el código de la carpeta dist: node dist/index.js
//npm run clean
//Comando para transpilar codigo: tsc

