import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46Y2hhbmdlaXQ='
  })
}

@Injectable()
export class Databaseserviceservice {
  station(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  url1 = 'http://10.80.115.75:8080/cbms/chargeBunkOperators';
  url2= 'http://10.80.115.75:8080/cbms/chargepoints';
  url3= 'http://10.80.115.75:8080/cbms/chargeBunks'; 
  url4= 'http://10.80.115.75:8080/cbms/chargeBunkOwners';
  constructor(private http: HttpClient) {
    console.log(http);  
  }
  network(x) {
    return this.http.post(this.url1, x, httpOptions);

    // return this.http.get(this.url1,x,httpOptions);
    
    // http://10.80.115.75:8080/cbms/chargeBunkOperators?filter={'chargeBunkOperatorDescription':'hi'}
  }

  charger(x){
    return this.http.post(this.url2,x,httpOptions);
  }
  
  chargebunk(x){
    return this.http.post(this.url3,x,httpOptions);
  }

  owner(x){
    return this.http.post(this.url4,x,httpOptions);
    }
  
}