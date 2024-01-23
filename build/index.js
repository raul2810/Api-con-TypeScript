"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESmodules for imports/export actions
//const express = require('express') -> commonjs for for imports/exports actions
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //aidware que transforma la req.body a un jason
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!! ' + new Date().toLocaleDateString());
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
