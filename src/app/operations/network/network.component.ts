import { SummaryService } from '../../summary.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Databaseserviceservice } from '../../database-service.service';
import { IdgeneratorService } from 'src/app/idgenerator.service';
// import { Summary } from '../../summary.model';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  @ViewChild('f') myForm: NgForm
  newNetwork = false;
  newOwner = false;
  newStation = false;
  database;
  chargeBunkOperatorId;
  date;
  // chargeBunkOwenerId;
  // chargeBunkId;

  constructor(private summaryService: SummaryService, private router: Router, private dataservice: Databaseserviceservice, private id:IdgeneratorService) { }


  ngOnInit() {
  }

  isitnew(e, itis) {
    // e.stopPropagation();
    // itis.stopPropagation();
    console.log(e, itis);
    switch (itis) {
      case 'net':
        if (e === 'new') {
          this.newNetwork = true;
          this.router.navigate(['/cboregistration']);
        } else if(e === '') {
          this.chargeBunkOperatorId = 1234;
        } else if(e === 'new1') {
          this.chargeBunkOperatorId = 12345;
        } else {
          this.newNetwork = false;
        }
        break;
      // case 'owner':
      //   if (e === 'new') {
      //     this.newOwner = true;
      //     this.router.navigate(['/cbwregistration']);
      //   } else if(e === '') {
      //     this.chargeBunkOwenerId = 1234;
      //   } else if(e === 'xxxx') {
      //     this.chargeBunkOwenerId = 12345;
      //   } else {
      //     this.newOwner = false
      //   }
      //   break;
      // case 'station':
      //   if (e === 'new') {
      //     this.newStation = true;
      //     this.router.navigate(['/cbwregistration']);

      //   } else if(e === '') {
      //     this.chargeBunkId = 1234;
      //   } else if(e === 'xxxx') {
      //     this.chargeBunkId = 12345;
      //   } else {
      //     this.newStation = false
      //   }
        break;
      default:
        break;
    }
  }

  // checkId(x) {
  //   console.log('checking id', x);
  //   switch (x) {
  //     case 'xxxx':
  //     this.chargeBunk = 12345;
  //       break;
  //     case 'yyyy':
  //     this.chargeBunk = 123456;
  //       break;
  //     case 'zzzz':
  //     this.chargeBunk = 1234567;
  //       break;

  //     default:
  //       break;
  //   }
  // }

  onSubmit(form: NgForm) {
    const value = form.value;

    this.date = new Date();
    var newDate = this.date.toString();
    this.chargeBunkOperatorId = this.id.randomString();

    this.summaryService.addNetworkSummary(this.chargeBunkOperatorId, value.chargeBunkOperatorName, value.chargeBunkOperatorDescription, value.address.houseNumber, value.address.street,
      value.address.zipCode, value.address.city, value.address.state, value.address.lattitude, value.address.longitude, value.operation, value.email, value.phone, value.website, newDate);
    this.dataservice.network(form.value).subscribe(res => {
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
