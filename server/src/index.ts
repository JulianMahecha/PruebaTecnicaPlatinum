import express, {Application} from 'express';

class Server {

        public app: Application;
        /* constructor */
        constructor(){
            this.app = express();
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
            this.app.listen();
        }
}

new Server();