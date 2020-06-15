/* Movies Controller, who exports its default controller */

import {Request, Response} from 'express'
import pool from '../database'


class MoviesController{
    /* Movies List */
    public async list(req: Request, res: Response){
        const  movies  = await pool.query('select * from MOVIES');
        const  genres  = await pool.query('select * from GENRES');
        res.json({
            "movies": movies,
            "genres": genres
        });
        
    }

    /* Single Movie */
    public getOne(req: Request, res: Response){
        pool.query('DESCRIBE MOVIES');
        res.json('single movie')
    }

    /* Methods */
    public async  create(req: Request, res: Response) : Promise<void>{
        await pool.query('INSERT INTO MOVIES set ?', [req.body]); /* Inserting request info into Movies Table on DB */
        console.log(req.body);
        res.json({message: 'movie saved'});
    }
    
    public delete(req: Request, res: Response){
        res.json({text: 'deleting a movie'});
    }

    public update(req: Request, res: Response){
        res.json({text: 'updating a movie'});
    }

}

export const moviesController = new MoviesController();