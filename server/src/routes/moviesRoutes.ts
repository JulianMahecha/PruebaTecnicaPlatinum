import {Router} from 'express';

class MoviesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('Hello'));
    }

}

const moviesRoutes = new MoviesRoutes();
export default moviesRoutes.router;