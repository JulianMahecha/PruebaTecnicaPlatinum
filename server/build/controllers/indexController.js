"use strict";
/* Index Controller, who exports its default controller */
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Hello');
    }
}
exports.indexController = new IndexController();
