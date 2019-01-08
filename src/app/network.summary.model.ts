export class NetworkSummary {
    constructor(
      public chargeBunkOperatorId:string,
        public chargeBunkOperatorName:string,
        public chargeBunkOperatorDescription:string,
        public houseNumber:number,
        public street:string,
        public zipCode:number,
        public city:string,
        public state:string,
        public lattitude:string,
        public longitude:string,
        public operation:string,
        public email:string,
        public phone: string,
        public website:string,
        public timestamp:string
    ){}

}
