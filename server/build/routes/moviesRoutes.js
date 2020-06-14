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
        this.router.get('/', moviesController_1.moviesController.index);
    }
}
const moviesRoutes = new MoviesRoutes();
exports.default = moviesRoutes.router;
