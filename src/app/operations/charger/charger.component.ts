import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SummaryService } from '../../summary.service';
import { Databaseserviceservice } from '../../database-service.service';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrls: ['./charger.component.css']
})
export class ChargerComponent  {
@ViewChild('f') myForm:NgForm;
date;
database;
  constructor(private summaryService:SummaryService, private dataservice: Databaseserviceservice) { }

  onSubmit(form: NgForm) {

    const value = form.value;
    this.date = new Date();
    var newDate = this.date.toString();
    this.summaryService.addChargerSummary(value.chargeBunkOperatorName,value.chargebunkowner,value.chargebunk,value.id, value.connectors, value.type1, value.status, value.authentication, newDate, value.protocol, value.vendor, value.model, value.sno, value.bsno, value.fv, value.fu, value.iccid, value.imsi, value.msno, value.mt, value.ds, value.communication, value.lh )
    this.dataservice.charger(form.value).subscribe(res => {
      this.database = res;
      console.log(res);
    });
    this.myForm.reset();
  }

  onCancel(form: NgForm) {
    this.myForm.reset();
  }

}
