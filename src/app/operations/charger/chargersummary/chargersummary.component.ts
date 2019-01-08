import { ChargerSummmary } from '../../../charger.summary.model';
import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../../../summary.service';

@Component({
  selector: 'app-chargersummary',
  templateUrl: './chargersummary.component.html',
  styleUrls: ['./chargersummary.component.css']
})
export class ChargersummaryComponent implements OnInit {
chargers:ChargerSummmary[]
  constructor(private chargerService: SummaryService) { 
    this.chargers = chargerService.getChargerSummary();
    console.log(this.chargers)
  }
   time = new Date();
  ngOnInit() {
     setInterval(()=>{
      this.time = new Date();
     },1000);
  }




}
