"use strict";
/* Movies Controller, who exports its default controller */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
const database_1 = __importDefault(require("../database"));
class MoviesController {
    index(req, res) {
        database_1.default.query('DESCRIBE MOVIES');
        res.json('movies');
    }
    create(req, res) {
        res.json({ text: 'creating a movie' });
    }
    delete(req, res) {
        res.json({ text: 'deleting a movie' });
    }
    update(req, res) {
        res.json({ text: 'updating a movie' });
    }
}
exports.moviesController = new MoviesController();
