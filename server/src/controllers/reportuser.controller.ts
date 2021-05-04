import {Request,Response} from "express"
import {connect} from "../database"

export function Index(req:Request,res:Response):Response{
    return res.json("funcionaaa");
 }

export async function GetPago(req:Request,res:Response){
   const conn= await connect();
   let usuario=req.body.usuario;
   const  data=await conn.query("SELECT id, numeroTarjeta, fechaCreacion, MontoPagar, nombreTarjeta ,Moneda FROM Pago where usuario=?;",[usuario]);
   conn.end();
   res.json(data[0]);
   res.status(200);    
}

export async function GetUser(req:Request,res:Response){
    const conn = await connect();
    let correo = req.body.correo;
    let contrasena = req.body.contrasena
    const  data=await conn.query("SELECT DPI FROM Usuario WHERE correo = ? AND contrasena = ?;",[correo, contrasena]);
    conn.end();
    res.json(data[0]);
    res.status(200);    
}

export async function GetMoviesPago(req:Request,res:Response){
    const conn = await connect();
    let pago = req.body.pago;
    const  data=await conn.query("SELECT estado, cantidad, movieName, movieChargeRate FROM Alquiler WHERE id IN (SELECT alquiler FROM PagoAlquiler WHERE PagoAlquiler.pago = ?);",[pago]);
    conn.end();
    res.json(data[0]);
    res.status(200);    
}



