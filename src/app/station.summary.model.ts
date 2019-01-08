export class StationSummary{
    constructor(public ChargeBunkId:string, public timezone:string,  public station:string, public daylightsavings:boolean , public description:string, public house:number,
        public street:string, public zip:number, public city:string, public state:string, public latitude:string, public longitude:string, public operation:string, public website:string, public timestamp:string){}


}
