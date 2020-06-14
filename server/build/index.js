"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const moviesRoutes_1 = __importDefault(require("./routes/moviesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    /* constructor */
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    /* config */
    config() {
        this.app.set('port', process.env.PORT || 3000); /* takes system server by default */
        this.app.use(morgan_1.default('dev'));
    }
    /* routes */
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/movies', moviesRoutes_1.default);
    }
    /* server listen */
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port 3000 ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
