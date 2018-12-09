import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ManagementComponent } from '../management/management.component';
import { SidenavMainComponent } from '../sidenav-main/sidenav-main.component';

import {CertificateComponent} from '../certificate/certificate.component';
import { ContactComponent } from '../contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
   { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'sidenav', component: SidenavMainComponent },
  { path: 'certificate', component: CertificateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
