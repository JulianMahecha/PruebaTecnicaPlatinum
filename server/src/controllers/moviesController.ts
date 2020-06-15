/* Movies Controller, who exports its default controller */

import {Request, Response} from 'express'
import pool from '../database'


class MoviesController{
    public list(req: Request, res: Response){
        pool.query('DESCRIBE MOVIES');
        res.json('movies')
    }

    public create(req: Request, res: Response){
        res.json({text: 'creating a movie'});
    }
    
    public delete(req: Request, res: Response){
        res.json({text: 'deleting a movie'});
    }

    public update(req: Request, res: Response){
        res.json({text: 'updating a movie'});
    }

}

export const moviesController = new MoviesController();