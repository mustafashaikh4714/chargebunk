import { NetworkSummary } from '../../../network.summary.model';
import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../../../summary.service';

@Component({
  selector: 'app-networksummary',
  templateUrl: './networksummary.component.html',
  styleUrls: ['./networksummary.component.css']
})
export class NetworksummaryComponent implements OnInit {
  networks:NetworkSummary[];
  constructor(private netService:SummaryService) {
    this.networks = netService.getNetworkSummary();
    console.log(this.networks);

   }


  ngOnInit() {
  }

}
