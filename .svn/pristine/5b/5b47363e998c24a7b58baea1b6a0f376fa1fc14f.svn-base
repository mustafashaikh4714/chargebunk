import { Component, OnInit } from '@angular/core';
// import { OwnerSummary } from './../../../owner.summary.model';
import { SummaryService } from '../../../summary.service';
import { OwnerSummary } from '../../../owner.summary.model';



@Component({
  selector: 'app-ownersummary',
  templateUrl: './ownersummary.component.html',
  styleUrls: ['./ownersummary.component.css']
})
export class OwnersummaryComponent implements OnInit {

    owners:OwnerSummary[];
    constructor(private ownService:SummaryService) {
      this.owners = ownService.getOwnerSummary();
     }
  
    ngOnInit() {
    }
  
  }
  
