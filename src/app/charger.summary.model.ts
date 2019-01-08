export class ChargerSummmary {
    constructor(public chargeBunkOperatorName:string,
      public chargebunkowner:string,
      public chargebunk:string,
       public id:number, public connectors:string,
        public type:string, public status:string,
         public authentication_key:string,
          public date:string,
          public protocol:string,
          public vendor:string,
          public model:string,
          public serial_number:string,
          public box_serial_number:string,
          public filmware_version:string,
          public fireware_update:string,
          public iccid:string,
          public imsi:string,
          public meter_serial_number:string,
          public meter_type:string,
          public dignostic_status:string,
          public communication:string,
          public last_heatbeat:string,) {}

}
