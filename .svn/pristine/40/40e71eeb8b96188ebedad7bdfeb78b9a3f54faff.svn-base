import { SummaryService } from '../../../summary.service';
import { Component, OnInit } from '@angular/core';
import { StationSummary } from '../../../station.summary.model';

@Component({
  selector: 'app-stationsummary',
  templateUrl: './stationsummary.component.html',
  styleUrls: ['./stationsummary.component.css']
})
export class StationsummaryComponent implements OnInit {
  stations:StationSummary[];
  constructor(private stationService:SummaryService) { 
    this.stations = stationService.getStationSummary();
  }

  ngOnInit() {
  }

}
