import {Request,Response} from "express"
import {connect} from "../database"


export function indexInicio(req:Request,res:Response):Response{
   return res.json("funcionaaa");
}
export async function GetMovies(req:Request,res:Response){
   const conn= await connect();
   const  data=await conn.query("select id,name,image from Movie where active=1;");
   conn.end();
   res.json(data[0]);
   res.status(200);
    
}
export async function GetMovie(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   const  data=await conn.query(" select * from Movie where id=?;",[id]);
   conn.end();
   res.json(data[0]);
   res.status(200);
    
}
export async function GetAlquiler(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   const  data=await conn.query(" select  a.id,movieName name, cantidad,movieChargeRate  precio from Alquiler a where a.estado=1 and a.usuario=?;",[id]);
   conn.end();
   res.json(data[0]);
   res.status(200);
    
}
export async function DeleteAlquiler(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   const  data=await conn.query("delete  from Alquiler where id=?",[id]);
   conn.end();
   res.json(true);
   res.status(200);
    
}
export async function GetLenguages(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   const  data=await conn.query(" select Description from Language l,MovieLanguage ml where l.id=ml.language and ml.movie=?;",[id]);
   conn.end();
   res.json(data[0]);
   res.status(200);
    
}
export async function GetAvailability(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   const  data=await conn.query("select * from Availability a,MovieAvailability ma where ma.availability=a.id and ma.movie=?;",[id]);
   conn.end();
   res.json(data[0]);
   res.status(200);
    
}

 

export async function CreateMovie(req:Request,res:Response){
   const conn= await connect();
   try{
   let id=req.body.id;
   let name=req.body.name;
   let image=req.body.image;
   let charge=req.body.chargeRate;
   let active=req.body.active;
   const  data=await conn.query("insert into Movie (id,name,image,chargeRate,active) values(?,?,?,?,?);",[id,name,image,charge,active]);
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      console.log(error)
      res.json(false)
      res.status(400);
      conn.end()
   }
}
export async function CreateAvailability(req:Request,res:Response){
   const conn= await connect();
   
   try{
   let id=req.body.id;
   let availability=req.body.availability;
   
   const  data=await conn.query("insert into MovieAvailability values(?,?);",[id,availability]);
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      console.log(error)
      res.json(false)
      res.status(400);
      conn.end()
   }
}
export async function MovieLanguage(req:Request,res:Response){
   const conn= await connect();
 
   try{
 
   let id=req.body.id;
   let lenguage=req.body.lenguage;
   const  data=await conn.query("insert into MovieLanguage (movie,language) values(?,?);",[id,lenguage]);
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      console.log(error)
      res.json(false)
      res.status(400);
      conn.end()
   }
}
export async function CreatePago(req:Request,res:Response){
   const conn= await connect();
   try{
   let usuario=req.body.usuario;
   let nombre=req.body.nombre;
   let tarjeta=req.body.tarjeta;
   let fecha=req.body.fecha;
   let codigo=req.body.codigo;
   let monto=req.body.total;
   let  moneda=req.body.moneda;
   let creacion=req.body.creacion;
 
   const  data=await conn.query("insert into Pago(numeroTarjeta,nombreTarjeta,fechaExpiracion,CodigoVerificador,MontoPagar,Moneda,usuario,fechaCreacion) values(?,?,?,?,?,?,?,?);",[tarjeta,nombre,fecha,codigo,monto,moneda,usuario,creacion]);
 
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      console.log(error)
      res.json(false)
      res.status(400);
      conn.end()
   }
}
export async function UpdateAlquilerPago(req:Request,res:Response){
   const conn= await connect();
   try{
   let id=req.body.id;
   const  data=await conn.query("update Alquiler set estado=2 where id=? and estado=1;",[id]);
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      console.log(error)
      res.json(false)
      res.status(400);
      conn.end()
   }
}
export async function GetPago(req:Request,res:Response){
   const conn= await connect();
 
   let fecha=req.body.fecha;
   const  data=await conn.query("select id from Pago where fechaCreacion=?;",[fecha]);
   conn.end();
   res.json(data[0]);
   res.status(200);
 
} 
export async function CreatePagoAlquiler(req:Request,res:Response){
   const conn= await connect();
   let pago=req.body.pago;
   let alquiler=req.body.alquiler;
 
   const  data=await conn.query("insert into PagoAlquiler (pago,alquiler) values(?,?);",[pago,alquiler]);
   conn.end();
   res.json(true);
   res.status(200);
 
} 
export async function ExistAlquiler(req:Request,res:Response){
   const conn= await connect();
   let usuario=req.body.usuario;
   let movie=req.body.movie;
  
   const  data=await conn.query("select id from Alquiler where usuario=? and movieName=? and estado=1;",[usuario,movie]);
   conn.end();
   res.json(data[0]);
   res.status(200);
    
}
export async function InsertAlquiler(req:Request,res:Response){
 
   try{
   const conn= await connect();
   let user=req.body.usuario;
   let cantidad=req.body.cantidad;

   let name=req.body.name;
   let image=req.body.image;
   let chargeRate=req.body.chargeRate;
   let codigo=req.body.codigo;
   
 
   const  data=await conn.query(" insert into Alquiler(id,usuario,cantidad,movieName,movieImage,movieChargeRate,estado) values(?,?,?,?,?,?,?);",[codigo,user,cantidad,name,image,chargeRate,1]);
   conn.end();
   res.json(true);
   res.status(200);
   }
   catch(error){
      res.json(false)
      res.status(400);
      console.log(error)
   }
   
}

export async function AddCantidadAlquiler(req:Request,res:Response){
   try{
   const conn= await connect();
   let cantidad=req.body.cantidad;
   let usuario=req.body.usuario;
  
   const  data=await conn.query("update Alquiler set cantidad=cantidad + ? where id=?",[cantidad,usuario]);
      conn.end();
      res.json(true);
      res.status(200);
   }catch(error){
      res.json(false)
      res.status(400);
      console.log(error)
   }
   
    
}
export async function UpdateMovie(req:Request,res:Response){
   try{
   const conn= await connect();
   let name=req.body.name;
   let chargeRate=req.body.chargeRate;
   let active=req.body.active;
   let id=req.body.id;

  
   const  data=await conn.query("update Movie set name=?,chargeRate=?,active=? where id=?;",[name,chargeRate,active,id]);
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      res.json(false)
      res.status(400);
      console.log(error)
   }
   
    
} 
export async function GetTransaccion(req:Request,res:Response){
   const conn= await connect();
   let usuario=req.body.usuario; 
   try{
   const  data=await conn.query("select id  ,cantidad ,movieName name,movieImage image,movieChargeRate chargeRate   from Alquiler   where estado=2 and usuario=? ;",[usuario]);
   conn.end();
   res.json(data[0]);
   res.status(200);
   } catch(error){
       console.log(error);
       res.json([]);
       res.status(400)
    }
}
export async function CreateTransaccion(req:Request,res:Response){
   const conn= await connect();
   let movie=req.body.movie; 
   let usuario=req.body.usuario;
   let cantidad=req.body.cantidad; 
 try{
   const  data=await conn.query("insert into Alquiler (movie,usuario,estado,cantidad) values(?,?,2,?);",[movie,usuario,cantidad]);
   conn.end();
   res.json(true);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json(false);
   res.status(200);
 }
}
 

export async function getUsuario(req:Request,res:Response){
   const conn= await connect();
   let user=req.body.user;
 try{
   const  data=await conn.query("select  DPI,concat_ws(' ',nombre,apellido ) nombre  from Usuario where DPI!=?;",[user]);
   conn.end();
   res.json(data[0]);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json([]);
   res.status(200);
 }
}
export async function EditTransaccion(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   let cantidad=req.body.cantidad; 
 try{
   const  data=await conn.query(" update  Alquiler set cantidad=cantidad+? where id=?;",[cantidad,id]);
   conn.end();
   res.json(true);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json(false);
   res.status(200);
 }
}
export async function ObetenerSegundaTransaccion(req:Request,res:Response){
   const conn= await connect();
   let movie=req.body.movie;
   let usuario=req.body.usuario; 
 try{
   const  data=await conn.query(" select  id from  Alquiler  where usuario=? and movie=? and estado=2 limit 1;",[usuario,movie]);
   conn.end();
   res.json(data[0]);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json([]);
   res.status(200);
 }
}
 
export async function EliminarTransferencia(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
 
 try{
   const  data=await conn.query("delete from Alquiler where id=?",[id]);
   conn.end();
   res.json(true);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json(false);
   res.status(200);
 }
}
 
export async function RegistrarUser(req:Request,res:Response){
   const conn= await connect();
   try{
   let user=req.body.user;
   let correo=req.body.correo;
   let psw=req.body.psw;
   let nombres=req.body.nombres;
   let apellidos=req.body.apellidos;
   let dpi=req.body.dpi;
   let  edad=req.body.edad;
  
   const  data=await conn.query("insert into Usuario(DPI,usuario,correo,contrasena,nombre,apellido,eddad) values(?,?,?,?,?,?,?);",[dpi,user,correo,psw,nombres,apellidos,edad]);
   
            
   conn.end();
   res.json(true);
   res.status(200);
   }catch(error){
      console.log(error)
      res.json(false)
      res.status(400);
      conn.end()
   }
}

export async function InventarioDePelicula(req:Request,res:Response){
   const conn= await connect();
   let id=req.body.id;
   console.log(id);
 
 try{
   const  data=await conn.query("SELECT * from Alquiler WHERE estado = 2 and usuario = ?",[id]);
   conn.end();
   res.json(data[0]);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json({error: error});
   res.status(200);
 }
}


export async function UsuarioAdmin(req:Request,res:Response){
   const conn= await connect(); 
 try{
   const  data=await conn.query("SELECT * from Alquiler a , Usuario u WHERE a.usuario = u.DPI;");
   conn.end();
   res.json(data[0]);
   res.status(200);
 }catch(error){
    console.log(error)
   conn.end();
   res.json({error: error});
   res.status(200);
 }
}


 
 