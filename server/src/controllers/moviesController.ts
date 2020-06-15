/* Movies Controller, who exports its default controller */

import {Request, Response} from 'express'
import pool from '../database'


class MoviesController{
    /* Movies List */
    public async list(req: Request, res: Response){
        const  movies  = await pool.query('select m.id, m.title, m.description as description, m.image, m.created_at, genres.name as genero from MOVIES m inner join genres on m.id_genre = genres.id'); /* Geting Movies */
        const  genres  = await pool.query('select * from GENRES'); /* Geting Genres */
        res.json({
            "movies": movies,
            "genres": genres
        });
        
    }

    /* Single Movie */
    public async getOne(req: Request, res: Response):Promise<any>{
        const { id } = req.params;
        const  movie  = await pool.query('select movies.*, genres.name as genero from MOVIES inner join genres ON movies.id_genre = genres.id where movies.id = ?', [id]); /* Geting Movie */
        if (movie.length > 0) {
            return res.json(movie[0]);
        }
        else{
            res.status(404).json({text: "The Movie Doesnt Exists"});
        }
    }

    /* Methods */

    /* Create Method */
    public async  create(req: Request, res: Response) : Promise<void>{
        await pool.query('INSERT INTO MOVIES set ?', [req.body]); /* Inserting request info into Movies Table on DB */
        console.log(req.body);
        res.json({message: 'movie saved'});
    }
    
    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM movies WHERE id = ?', [id]);
        res.json({text: "The movie was deleted"});
    }

    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE movies set ? WHERE id = ?', [req.body, id]);
        res.json({message: "The movie was updated"});
    }

}

export const moviesController = new MoviesController();