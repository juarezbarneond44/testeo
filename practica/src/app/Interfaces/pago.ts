export interface pago{
    nombre:string|null;
    tarjeta:string|null;
    codigo:number|null;
    moneda:any|null;
    total:number|null;
    fecha:Date|null;
    usuario?:Number|string|null;
    creacion?:string;


}