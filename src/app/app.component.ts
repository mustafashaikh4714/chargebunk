import { Component } from '@angular/core';
import { SummaryService } from './summary.service';
import { DISABLED } from '@angular/forms/src/model';
import { Button } from 'protractor';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapsed = true;
  constructor(public signinvalue: SummaryService )     
    // config: NgbDropdownConfig
   {
    // config.placement = 'bottom-left';
    // config.autoClose = false;
  }

  signout() {
    this.signinvalue.login = false;
  }
  // damn() {
  //   alert("hello sai krishna");
  // }
  // damnw() {
  //   alert('ela');
  // }
}
