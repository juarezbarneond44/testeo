"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMoviesPago = exports.GetUser = exports.GetPago = exports.Index = void 0;
const database_1 = require("../database");
function Index(req, res) {
    return res.json("funcionaaa");
}
exports.Index = Index;
function GetPago(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let usuario = req.body.usuario;
        const data = yield conn.query("SELECT id, numeroTarjeta, fechaCreacion, MontoPagar, nombreTarjeta ,Moneda FROM Pago where usuario=?;", [usuario]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetPago = GetPago;
function GetUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let correo = req.body.correo;
        let contrasena = req.body.contrasena;
        const data = yield conn.query("SELECT DPI FROM Usuario WHERE correo = ? AND contrasena = ?;", [correo, contrasena]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetUser = GetUser;
function GetMoviesPago(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let pago = req.body.pago;
        const data = yield conn.query("SELECT estado, cantidad, movieName, movieChargeRate FROM Alquiler WHERE id IN (SELECT alquiler FROM PagoAlquiler WHERE PagoAlquiler.pago = ?);", [pago]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetMoviesPago = GetMoviesPago;
