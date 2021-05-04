import { Lenguaje } from "./Lenguaje";

export interface Movie{
 id:number;
 name:string;
 image:string;
 chargeRate?:number;
 active?:boolean;
 availabilities:any[];
 languages:Lenguaje[];
}