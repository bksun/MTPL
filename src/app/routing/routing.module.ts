import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ManagementComponent } from '../management/management.component';
// import { SidenavMainComponent } from '../sidenav-main/sidenav-main.component';
import { Notfound404Component } from '../notfound404/notfound404.component';
import { CertificateComponent } from '../certificate/certificate.component';
import { ContactComponent } from '../contact/contact.component';
import { ProgressComponent } from '../progress/progress.component';
import { PolesComponent  } from '../poles/poles.component';
import { BarsComponent  } from '../bars/bars.component';
import { PipesComponent } from '../pipes/pipes.component';
import { FlangesComponent } from '../flanges/flanges.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'sidenav', component: ProgressComponent },
  { path: 'certificate', component: CertificateComponent },
  { path: 'products/poles', component: PolesComponent },
  { path: 'products/bars', component: BarsComponent },
  { path: 'products/pipes', component: PipesComponent },
  { path: 'products/flanges', component: FlangesComponent },
  { path:  '**', component: Notfound404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { useHash: true })
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
