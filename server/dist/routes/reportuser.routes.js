"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
var cors = require('cors');
const reportuser_controller_1 = require("../controllers/reportuser.controller");
router.route("/").get(reportuser_controller_1.Index);
router.route("/GetUser").post(reportuser_controller_1.GetUser);
router.route("/GetPago").post(reportuser_controller_1.GetPago);
router.route("/GetMoviesPago").post(reportuser_controller_1.GetMoviesPago);
exports.default = router;
