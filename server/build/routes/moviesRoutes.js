"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
class MoviesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', moviesController_1.moviesController.list); /* Movies List */
        this.router.get('/:id', moviesController_1.moviesController.getOne); /* Single Movie */
        this.router.post('/', moviesController_1.moviesController.create); /* Creating a movie */
        this.router.delete('/:id', moviesController_1.moviesController.delete); /* Deleting a movie */
        this.router.put('/:id', moviesController_1.moviesController.update); /* Updating a movie */
    }
}
const moviesRoutes = new MoviesRoutes();
exports.default = moviesRoutes.router;
