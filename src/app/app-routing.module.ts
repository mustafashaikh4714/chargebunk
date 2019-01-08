import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationComponent } from './operations/station/station.component';
import { ChargerComponent } from './operations/charger/charger.component';
import { NetworkComponent } from './operations/network/network.component';
import { DatamanagementComponent } from './datamanagement/datamanagement.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NetworksummaryComponent } from './operations/network/networksummary/networksummary.component';
import { ChargersummaryComponent } from './operations/charger/chargersummary/chargersummary.component';
import { StationsummaryComponent } from './operations/station/stationsummary/stationsummary.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessfullyloggedoutComponent } from './successfullyloggedout/successfullyloggedout.component';
import { OwnerComponent } from './operations/owner/owner.component';
import { RequestdiagnoticsComponent } from './operations/requestdiagnotics/requestdiagnotics.component';
import { ChargepointconfigurationComponent } from './operations/chargepointconfiguration/chargepointconfiguration.component';
import { GroupconfigurationentryComponent } from './operations/groupconfigurationentry/groupconfigurationentry.component';
import { ChargepointconfigurationviewComponent } from './operations/chargepointconfigurationview/chargepointconfigurationview.component';
import { LogsComponent } from './logs/logs.component';
import { OwnersummaryComponent } from './operations/owner/ownersummary/ownersummary.component';
import { CboregistrationComponent } from './cboregistration/cboregistration.component';
import { CbwregistrationComponent } from './cbwregistration/cbwregistration.component';
import { CbregistrationComponent } from './cbregistration/cbregistration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'datamanagement', component: DatamanagementComponent },
  { path: 'network', component: NetworkComponent },
  { path: 'charger', component: ChargerComponent },
  { path: 'station', component: StationComponent}, 
  { path: 'logs', component:LogsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'charger/chargersummary', component:ChargersummaryComponent},
  { path: 'network/networksummary', component:NetworksummaryComponent},
  { path: 'station/stationsummary', component:StationsummaryComponent},
  { path: 'owner/ownersummary', component:OwnersummaryComponent},
  { path: 'signin',component:SigninComponent},
  { path: 'signup',component:SignupComponent},
  { path: 'loggedout',component: SuccessfullyloggedoutComponent},
  { path: 'owner',component:OwnerComponent},
  { path: 'requestdiagnotics',component:RequestdiagnoticsComponent},
  { path: 'chargepointconfiguration',component:ChargepointconfigurationComponent},
  { path: 'groupconfigurationentry',component:GroupconfigurationentryComponent},
  { path: 'chargepointconfigurationview',component:ChargepointconfigurationviewComponent},
  { path: 'cboregistration',component:CboregistrationComponent},
  { path: 'cbwregistration',component:CbwregistrationComponent},
  { path: 'cbregistration',component:CbregistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
