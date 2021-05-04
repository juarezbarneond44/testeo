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
exports.UsuarioAdmin = exports.InventarioDePelicula = exports.RegistrarUser = exports.EliminarTransferencia = exports.ObetenerSegundaTransaccion = exports.EditTransaccion = exports.getUsuario = exports.CreateTransaccion = exports.GetTransaccion = exports.UpdateMovie = exports.AddCantidadAlquiler = exports.InsertAlquiler = exports.ExistAlquiler = exports.CreatePagoAlquiler = exports.GetPago = exports.UpdateAlquilerPago = exports.CreatePago = exports.MovieLanguage = exports.CreateAvailability = exports.CreateMovie = exports.GetAvailability = exports.GetLenguages = exports.DeleteAlquiler = exports.GetAlquiler = exports.GetMovie = exports.GetMovies = exports.indexInicio = void 0;
const database_1 = require("../database");
function indexInicio(req, res) {
    return res.json("funcionaaa");
}
exports.indexInicio = indexInicio;
function GetMovies(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const data = yield conn.query("select id,name,image from Movie where active=1;");
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetMovies = GetMovies;
function GetMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        const data = yield conn.query(" select * from Movie where id=?;", [id]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetMovie = GetMovie;
function GetAlquiler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        const data = yield conn.query(" select  a.id,movieName name, cantidad,movieChargeRate  precio from Alquiler a where a.estado=1 and a.usuario=?;", [id]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetAlquiler = GetAlquiler;
function DeleteAlquiler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        const data = yield conn.query("delete  from Alquiler where id=?", [id]);
        conn.end();
        res.json(true);
        res.status(200);
    });
}
exports.DeleteAlquiler = DeleteAlquiler;
function GetLenguages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        const data = yield conn.query(" select Description from Language l,MovieLanguage ml where l.id=ml.language and ml.movie=?;", [id]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetLenguages = GetLenguages;
function GetAvailability(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        const data = yield conn.query("select * from Availability a,MovieAvailability ma where ma.availability=a.id and ma.movie=?;", [id]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetAvailability = GetAvailability;
function CreateMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            let id = req.body.id;
            let name = req.body.name;
            let image = req.body.image;
            let charge = req.body.chargeRate;
            let active = req.body.active;
            const data = yield conn.query("insert into Movie (id,name,image,chargeRate,active) values(?,?,?,?,?);", [id, name, image, charge, active]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json(false);
            res.status(400);
            conn.end();
        }
    });
}
exports.CreateMovie = CreateMovie;
function CreateAvailability(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            let id = req.body.id;
            let availability = req.body.availability;
            const data = yield conn.query("insert into MovieAvailability values(?,?);", [id, availability]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json(false);
            res.status(400);
            conn.end();
        }
    });
}
exports.CreateAvailability = CreateAvailability;
function MovieLanguage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            let id = req.body.id;
            let lenguage = req.body.lenguage;
            const data = yield conn.query("insert into MovieLanguage (movie,language) values(?,?);", [id, lenguage]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json(false);
            res.status(400);
            conn.end();
        }
    });
}
exports.MovieLanguage = MovieLanguage;
function CreatePago(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            let usuario = req.body.usuario;
            let nombre = req.body.nombre;
            let tarjeta = req.body.tarjeta;
            let fecha = req.body.fecha;
            let codigo = req.body.codigo;
            let monto = req.body.total;
            let moneda = req.body.moneda;
            let creacion = req.body.creacion;
            const data = yield conn.query("insert into Pago(numeroTarjeta,nombreTarjeta,fechaExpiracion,CodigoVerificador,MontoPagar,Moneda,usuario,fechaCreacion) values(?,?,?,?,?,?,?,?);", [tarjeta, nombre, fecha, codigo, monto, moneda, usuario, creacion]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json(false);
            res.status(400);
            conn.end();
        }
    });
}
exports.CreatePago = CreatePago;
function UpdateAlquilerPago(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            let id = req.body.id;
            const data = yield conn.query("update Alquiler set estado=2 where id=? and estado=1;", [id]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json(false);
            res.status(400);
            conn.end();
        }
    });
}
exports.UpdateAlquilerPago = UpdateAlquilerPago;
function GetPago(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let fecha = req.body.fecha;
        const data = yield conn.query("select id from Pago where fechaCreacion=?;", [fecha]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.GetPago = GetPago;
function CreatePagoAlquiler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let pago = req.body.pago;
        let alquiler = req.body.alquiler;
        const data = yield conn.query("insert into PagoAlquiler (pago,alquiler) values(?,?);", [pago, alquiler]);
        conn.end();
        res.json(true);
        res.status(200);
    });
}
exports.CreatePagoAlquiler = CreatePagoAlquiler;
function ExistAlquiler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let usuario = req.body.usuario;
        let movie = req.body.movie;
        const data = yield conn.query("select id from Alquiler where usuario=? and movieName=? and estado=1;", [usuario, movie]);
        conn.end();
        res.json(data[0]);
        res.status(200);
    });
}
exports.ExistAlquiler = ExistAlquiler;
function InsertAlquiler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            let user = req.body.usuario;
            let cantidad = req.body.cantidad;
            let name = req.body.name;
            let image = req.body.image;
            let chargeRate = req.body.chargeRate;
            let codigo = req.body.codigo;
            const data = yield conn.query(" insert into Alquiler(id,usuario,cantidad,movieName,movieImage,movieChargeRate,estado) values(?,?,?,?,?,?,?);", [codigo, user, cantidad, name, image, chargeRate, 1]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            res.json(false);
            res.status(400);
            console.log(error);
        }
    });
}
exports.InsertAlquiler = InsertAlquiler;
function AddCantidadAlquiler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            let cantidad = req.body.cantidad;
            let usuario = req.body.usuario;
            const data = yield conn.query("update Alquiler set cantidad=cantidad + ? where id=?", [cantidad, usuario]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            res.json(false);
            res.status(400);
            console.log(error);
        }
    });
}
exports.AddCantidadAlquiler = AddCantidadAlquiler;
function UpdateMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            let name = req.body.name;
            let chargeRate = req.body.chargeRate;
            let active = req.body.active;
            let id = req.body.id;
            const data = yield conn.query("update Movie set name=?,chargeRate=?,active=? where id=?;", [name, chargeRate, active, id]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            res.json(false);
            res.status(400);
            console.log(error);
        }
    });
}
exports.UpdateMovie = UpdateMovie;
function GetTransaccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let usuario = req.body.usuario;
        try {
            const data = yield conn.query("select id  ,cantidad ,movieName name,movieImage image,movieChargeRate chargeRate   from Alquiler   where estado=2 and usuario=? ;", [usuario]);
            conn.end();
            res.json(data[0]);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json([]);
            res.status(400);
        }
    });
}
exports.GetTransaccion = GetTransaccion;
function CreateTransaccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let movie = req.body.movie;
        let usuario = req.body.usuario;
        let cantidad = req.body.cantidad;
        try {
            const data = yield conn.query("insert into Alquiler (movie,usuario,estado,cantidad) values(?,?,2,?);", [movie, usuario, cantidad]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json(false);
            res.status(200);
        }
    });
}
exports.CreateTransaccion = CreateTransaccion;
function getUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let user = req.body.user;
        try {
            const data = yield conn.query("select  DPI,concat_ws(' ',nombre,apellido ) nombre  from Usuario where DPI!=?;", [user]);
            conn.end();
            res.json(data[0]);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json([]);
            res.status(200);
        }
    });
}
exports.getUsuario = getUsuario;
function EditTransaccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        let cantidad = req.body.cantidad;
        try {
            const data = yield conn.query(" update  Alquiler set cantidad=cantidad+? where id=?;", [cantidad, id]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json(false);
            res.status(200);
        }
    });
}
exports.EditTransaccion = EditTransaccion;
function ObetenerSegundaTransaccion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let movie = req.body.movie;
        let usuario = req.body.usuario;
        try {
            const data = yield conn.query(" select  id from  Alquiler  where usuario=? and movie=? and estado=2 limit 1;", [usuario, movie]);
            conn.end();
            res.json(data[0]);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json([]);
            res.status(200);
        }
    });
}
exports.ObetenerSegundaTransaccion = ObetenerSegundaTransaccion;
function EliminarTransferencia(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        try {
            const data = yield conn.query("delete from Alquiler where id=?", [id]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json(false);
            res.status(200);
        }
    });
}
exports.EliminarTransferencia = EliminarTransferencia;
function RegistrarUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            let user = req.body.user;
            let correo = req.body.correo;
            let psw = req.body.psw;
            let nombres = req.body.nombres;
            let apellidos = req.body.apellidos;
            let dpi = req.body.dpi;
            let edad = req.body.edad;
            const data = yield conn.query("insert into Usuario(DPI,usuario,correo,contrasena,nombre,apellido,eddad) values(?,?,?,?,?,?,?);", [dpi, user, correo, psw, nombres, apellidos, edad]);
            conn.end();
            res.json(true);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            res.json(false);
            res.status(400);
            conn.end();
        }
    });
}
exports.RegistrarUser = RegistrarUser;
function InventarioDePelicula(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        let id = req.body.id;
        console.log(id);
        try {
            const data = yield conn.query("SELECT * from Alquiler WHERE estado = 2 and usuario = ?", [id]);
            conn.end();
            res.json(data[0]);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json({ error: error });
            res.status(200);
        }
    });
}
exports.InventarioDePelicula = InventarioDePelicula;
function UsuarioAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        try {
            const data = yield conn.query("SELECT * from Alquiler a , Usuario u WHERE a.usuario = u.DPI;");
            conn.end();
            res.json(data[0]);
            res.status(200);
        }
        catch (error) {
            console.log(error);
            conn.end();
            res.json({ error: error });
            res.status(200);
        }
    });
}
exports.UsuarioAdmin = UsuarioAdmin;
