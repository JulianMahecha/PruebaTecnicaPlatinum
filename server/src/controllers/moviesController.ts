/* Movies Controller, who exports its default controller */

import {Request, Response} from 'express'
import pool from '../database'


class MoviesController{
    index(req: Request, res: Response){
        pool.query('DESCRIBE MOVIES');
        res.json('movies')
    }
}

export const moviesController = new MoviesController();