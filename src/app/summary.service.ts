import { StationSummary } from './station.summary.model';
import { NetworkSummary } from './network.summary.model';
import { ChargerSummmary } from './charger.summary.model';
import { OwnerSummary } from './owner.summary.model';
import { viewDef } from '@angular/core/src/view';

// import { OwnerSummary } from './operations/owner/ownersummary/owner.summary.model';
export class SummaryService {
    networkSummary:NetworkSummary[] = [];
    stationSummary:StationSummary[] = [];
    chargerSummary:ChargerSummmary[] = [];
    ownerSummary:OwnerSummary[] =[];
    // http: any;
    // ngOnInit(){
    //     let obs= this.http.get('http://10.80.115.60:8080/cbms/');
    //      obs.subscribe((response)=>console.log("response"))
    //     }



  public login = false;

    getNetworkSummary() {
        return this.networkSummary;
    }

    addNetworkSummary(id:string, net:string, desc:string, houseNo:number, str:string, zp:number, ct:string, stte:string,
         lat:string, long:string, op:string, mail:string, ph:string, site:string, time:string) {
     this.networkSummary.push({
       chargeBunkOperatorId:id,
        chargeBunkOperatorName: net,
        // chargebunkowner: own,
        // chargebunk: st,
        chargeBunkOperatorDescription: desc,
        houseNumber: houseNo,
        street: str,
        zipCode: zp,
        city: ct,
        state: stte,
        lattitude: lat,
        longitude: long,
        operation: op,
        email:mail,
        phone:ph,
        website:site,
        timestamp:time
     });

    }
    addStationSummary(id:string, time:string, daylightsaving:boolean, st:string, desc:string, houseNo:number, str:string, zp:number, ct:string, stte:string,
        lat:string, long:string, op:string, website:string, d:string) {
    this.stationSummary.push({
      ChargeBunkId:id,
       timezone: time,
       daylightsavings: daylightsaving,
       station: st,
       description: desc,
       house: houseNo,
       street: str,
       zip: zp,
       city: ct,
       state: stte,
       latitude: lat,
       longitude: long,
       operation: op,
       website:website,
       timestamp:d
    });
  }

     getStationSummary(){
        return this.stationSummary;
    }

    getChargerSummary() {
        return this.chargerSummary;
    }
    getOwnerSummary(){
        return this.ownerSummary;
    }

    addOwnerSummary(id:string, net:string, own:string, st:string, desc:string, houseNo:number, str:string, zp:number, ct:string, stte:string,
        lat:string, long:string, op:string, email:string, ph:string, site:string, time:string){
            this.ownerSummary.push({
                chargeBunkOwnerId:id,
                chargebunkoperator: net,
                chargebunkowner: own,
                chargebunk: st,
                description: desc,
                house: houseNo,
                street: str,
                zip: zp,
                city: ct,
                state: stte,
                latitude: lat,
                longitude: long,
                operation: op,
                email:email,
                phone:ph,
                website:site,
                timestamp:time
            })
        }

     addChargerSummary(net:string, own:string, st:string, i:number, conn:string, types:string, stat:string, auth:string, d:string, pt:string, vn:string, md:string, sno:string, bsno:string, fv:string, fu:string, icid:string, imi:string, msno:string, mt:string, ds:string, comm:string, lh:string) {
        this.chargerSummary.push({
            chargeBunkOperatorName:net,
            chargebunkowner:own,
            chargebunk:st,
            id: i,
            connectors: conn,
            type: types,
            status: stat,
            authentication_key: auth,
            date:d,
            protocol:pt,
            vendor:vn,
            model:md,
            serial_number:sno,
            box_serial_number:bsno,
            filmware_version:fv,
            fireware_update:fu,
            iccid:icid,
            imsi:imi,
            meter_serial_number:msno,
            meter_type:mt,
            dignostic_status:ds,
            communication:comm,
            last_heatbeat:lh
         });
     }

     getdate(){
         return new Date();
     }
}










//station details

// station: 'st1',
// timezone: 'utc+5:30',
// description: 'Some dummy text here',
// daylightsavings: '2Hrs',
// house: 302,
// street: 'Rajnagar001',
// zip: 10023,
// city: 'Nasik',
// state: 'Maharashtra',
// latitude:'52.36',
// longitude:'25.36',
// operation: 'Again some dummy text here'


//network details

// network: 'Net1',
// owner: 'Sai Krishna',
// station: 'st1',
// description: 'Some dummy text here',
// house: 302,
// street: 'Rajnagar001',
// zip: 10023,
// city: 'Nasik',
// state: 'Maharashtra',
// latitude:'52.36',
// longitude:'25.36',
// operation: 'Again some dummy text here'
