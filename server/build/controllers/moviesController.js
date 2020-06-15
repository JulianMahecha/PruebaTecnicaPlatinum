"use strict";
/* Movies Controller, who exports its default controller */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
const database_1 = __importDefault(require("../database"));
class MoviesController {
    /* Movies List */
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield database_1.default.query('select m.id, m.title, m.description as description, m.image, m.created_at, genres.name as genero from MOVIES m inner join genres on m.id_genre = genres.id'); /* Geting Movies */
            const genres = yield database_1.default.query('select * from GENRES'); /* Geting Genres */
            res.json({
                "movies": movies,
                "genres": genres
            });
        });
    }
    /* Single Movie */
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movie = yield database_1.default.query('select movies.*, genres.name as genero from MOVIES inner join genres ON movies.id_genre = genres.id where movies.id = ?', [id]); /* Geting Movie */
            if (movie.length > 0) {
                return res.json(movie[0]);
            }
            else {
                res.status(404).json({ text: "The Movie Doesnt Exists" });
            }
        });
    }
    /* Methods */
    /* Create Method */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO MOVIES set ?', [req.body]); /* Inserting request info into Movies Table on DB */
            console.log(req.body);
            res.json({ message: 'movie saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM movies WHERE id = ?', [id]);
            res.json({ text: "The movie was deleted" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE movies set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The movie was updated" });
        });
    }
}
exports.moviesController = new MoviesController();
