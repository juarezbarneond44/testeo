export interface Availability{
    id:number;
    name:string;
    serviceDays: number;
    bonusDays?: number;
    fine: number;
}