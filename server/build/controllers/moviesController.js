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
        res.json({ message: 'mavie list' });
    }
    /* Single Movie */
    getOne(req, res) {
        database_1.default.query('DESCRIBE MOVIES');
        res.json('single movie');
    }
    /* Methods */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO MOVIES set ?', [req.body]); /* Inserting request info into Movies Table on DB */
            console.log(req.body);
            res.json({ message: 'movie saved' });
        });
    }
    delete(req, res) {
        res.json({ text: 'deleting a movie' });
    }
    update(req, res) {
        res.json({ text: 'updating a movie' });
    }
}
exports.moviesController = new MoviesController();
