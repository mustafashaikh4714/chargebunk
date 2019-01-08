import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SummaryService } from '../../summary.service';
import { Databaseserviceservice } from '../../database-service.service';
import { IdgeneratorService } from 'src/app/idgenerator.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent  {

  @ViewChild('f') myForm:NgForm

  database;
  chargeBunkId;
  date;

  constructor(private stationService:SummaryService,private dataservice: Databaseserviceservice, private id:IdgeneratorService) { }

  onSubmit(form:NgForm) {
  const value = form.value;

  this.date = new Date();
  var newDate = this.date.toString();
  this.chargeBunkId = this.id.randomString();

  this.stationService.addStationSummary(this.chargeBunkId, value.timezone, value.daylightsaving, value.station, value.description, value.house, value.street, value.zip, value.city, value.state, value.latitude, value.longitude, value.operation, value.website, newDate)
  this.dataservice.chargebunk(form.value).subscribe(res => {
    this.database = res;
    console.log(res);
  });
  this.myForm.reset();
}

  onCancel(form: NgForm) {
    this.myForm.reset();
  }
}
