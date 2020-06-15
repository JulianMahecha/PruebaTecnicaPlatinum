/* Movies Controller, who exports its default controller */

import {Request, Response} from 'express'
import pool from '../database'


class MoviesController{
    /* Movies List */
    public async list(req: Request, res: Response){
        const  movies  = await pool.query('select * from MOVIES'); /* Geting Movies */
        const  genres  = await pool.query('select * from GENRES'); /* Geting Genres */
        res.json({
            "movies": movies,
            "genres": genres
        });
        
    }

    /* Single Movie */
    public async getOne(req: Request, res: Response):Promise<void>{
        const { id } = req.params;
        const  movie  = await pool.query('select movies.*, genres.name as genero from MOVIES inner join genres ON movies.id_genre = genres.id where movies.id = ?', [id]); /* Geting Movies */
        console.log(movie);
        res.json(movie);
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