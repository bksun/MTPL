import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ManagementComponent } from '../management/management.component';
import { SidenavMainComponent } from '../sidenav-main/sidenav-main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'sidenav', component: SidenavMainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
