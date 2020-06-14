import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import moviesRoutes from './routes/moviesRoutes';

import morgan from 'morgan';
import cors from 'cors';

class Server {

        public app: Application;
        /* constructor */
        constructor(){
            this.app = express();
            this.config();
            this.routes();
        }

        /* config */
        config(): void{
            this.app.set('port', process.env.PORT || 3000); /* takes system server by default */
            this.app.use(morgan('dev')); /* show client petitions */
            this.app.use(cors()); /* enable frontend server comunication */
            this.app.use(express.json()); /* enable json request format */
            this.app.use(express.urlencoded({extended: false}));
        }

        /* routes */
        routes(): void{
            this.app.use(indexRoutes);
            this.app.use('/api/movies', moviesRoutes);
        }

        /* server listen */
        start(): void{
            this.app.listen(this.app.get('port'), () =>{
                console.log(`server on port 3000 ${this.app.get('port')}`);
            });
        }
}

const server = new Server();
server.start();