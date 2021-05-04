"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
var cors = require('cors');
const programador1_controller_1 = require("../controllers/programador1.controller");
router.route("/")
    .get(programador1_controller_1.indexInicio);
router.route("/GetMovies")
    .get(programador1_controller_1.GetMovies);
router.route("/GetMovie")
    .post(programador1_controller_1.GetMovie);
router.route("/GetLenguages")
    .post(programador1_controller_1.GetLenguages);
router.route("/GetAvailability")
    .post(programador1_controller_1.GetAvailability);
router.route("/ExistAlquiler")
    .post(programador1_controller_1.ExistAlquiler);
router.route("/InsertAlquiler")
    .post(programador1_controller_1.InsertAlquiler);
router.route("/AddCantidadAlquiler")
    .post(programador1_controller_1.AddCantidadAlquiler);
router.route("/UpdateMovie")
    .post(programador1_controller_1.UpdateMovie);
router.route("/GetAlquiler")
    .post(programador1_controller_1.GetAlquiler);
router.route("/DeleteAlquiler")
    .put(programador1_controller_1.DeleteAlquiler);
router.route("/CreatePago")
    .post(programador1_controller_1.CreatePago);
router.route("/UpdateAlquilerPago")
    .post(programador1_controller_1.UpdateAlquilerPago);
router.route("/GetPago")
    .post(programador1_controller_1.GetPago);
router.route("/CreatePagoAlquiler")
    .post(programador1_controller_1.CreatePagoAlquiler);
router.route("/GetTransaccion")
    .post(programador1_controller_1.GetTransaccion);
router.route("/CreateTransaccion")
    .post(programador1_controller_1.CreateTransaccion);
router.route("/EditTransaccion")
    .post(programador1_controller_1.EditTransaccion);
router.route("/ObetenerSegundaTransaccion")
    .post(programador1_controller_1.ObetenerSegundaTransaccion);
router.route("/getUsuario")
    .post(programador1_controller_1.getUsuario);
router.route("/EliminarTransferencia")
    .put(programador1_controller_1.EliminarTransferencia);
router.route("/CreateMovie")
    .post(programador1_controller_1.CreateMovie);
router.route("/CreateAvailability")
    .post(programador1_controller_1.CreateAvailability);
router.route("/MovieLanguage")
    .post(programador1_controller_1.MovieLanguage);
router.route("/getInventario")
    .post(programador1_controller_1.InventarioDePelicula);
router.route("/getAdmin")
    .get(programador1_controller_1.UsuarioAdmin);
router.route("/RegistrarUser").post(programador1_controller_1.RegistrarUser);
exports.default = router;
