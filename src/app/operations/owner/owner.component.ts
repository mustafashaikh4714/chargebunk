import { Component, OnInit, ViewChild } from '@angular/core';
import { SummaryService } from '../../summary.service';
import { NgForm } from '@angular/forms';
import { Databaseserviceservice } from '../../database-service.service';
import { IdgeneratorService } from 'src/app/idgenerator.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  @ViewChild('f') myForm: NgForm
  newNetwork = false;
  newOwner = false;
  newStation = false;
  database;
  chargeBunkOwnerId;
  date;

  constructor(private summaryService:SummaryService,private dataservice: Databaseserviceservice, private id:IdgeneratorService) { }


  ngOnInit() {
  }

  isitnew(e, itis) {
    console.log(e, itis);
    switch (itis) {
      case 'network':
        (e === 'new') ? this.newNetwork = true : this.newNetwork = false;
        break;
      case 'owner':
        (e === 'new') ? this.newOwner = true : this.newOwner = false;
        break;
      case 'station':
        (e === 'new') ? this.newStation = true : this.newStation = false;
        break;
      default:
        break;
    }
  }

onSubmit(form: NgForm) {

  const value = form.value;

  this.date = new Date();
    var newDate = this.date.toString();
    this.chargeBunkOwnerId = this.id.randomString();

  this.summaryService.addOwnerSummary(this.chargeBunkOwnerId, value.chargebunkoperator, value.chargebunkowner,
     value.chargebunk, value.description, value.address.house, value.address.street,
     value.address.zip, value.address.city, value.address.state, value.address.latitude, value.address.longitude,
      value.operation, value.email, value.phone, value.website, newDate)

     this.dataservice.owner(form.value).subscribe(res => {
      this.database = res;
      console.log(res);
    });

  this.myForm.reset();
}

onCancel(form: NgForm) {
  this.myForm.reset();
//  const value = form.value;
//  value.network = 'All';
//  value.owner = 'All';
//  value.station = 'All';
//  value.description = '';
//  value.house = '';
//  value.street = '';
//  value.state = '';
//  value.zip = '';
//  value.city = '';
//  value.longitude = '';
//  value.latitude = '';
//  value.operation = '';
}
}
