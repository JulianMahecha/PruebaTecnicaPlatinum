/* Movies Controller, who exports its default controller */

import {Request, Response} from 'express'

class MoviesController{
    index(req: Request, res: Response){
        res.send('Movies')
    }
}

export const moviesController = new MoviesController();