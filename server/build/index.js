"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
    }
    /* routes */
    routes() {
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
