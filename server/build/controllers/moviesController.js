"use strict";
/* Movies Controller, who exports its default controller */
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
class MoviesController {
    index(req, res) {
        res.send('Movies');
    }
}
exports.moviesController = new MoviesController();
