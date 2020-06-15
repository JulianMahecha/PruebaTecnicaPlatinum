import {Router} from 'express';
import {moviesController} from '../controllers/moviesController';
class MoviesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', moviesController.index); /* Index */
        this.router.post('/', moviesController.create); /* Creating a movie */
        this.router.delete('/:id', moviesController.delete); /* Deleting a movie */
        this.router.put('/:id', moviesController.update); /* Updating a movie */
    }

}

const moviesRoutes = new MoviesRoutes();
export default moviesRoutes.router;