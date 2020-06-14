import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import moviesRoutes from './routes/moviesRoutes';
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
        }
        /* routes */
        routes(): void{
        
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