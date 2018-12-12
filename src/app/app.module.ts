import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavMainComponent } from './sidenav-main/sidenav-main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { AboutComponent } from './about/about.component';
import { ManagementComponent } from './management/management.component';
import { ContactComponent } from './contact/contact.component';

import { ProgressComponent } from './progress/progress.component';
import { CertificateComponent } from './certificate/certificate.component';
import { Notfound404Component } from './notfound404/notfound404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavMainComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ManagementComponent,
    ContactComponent,
    HomeComponent,
    ProgressComponent,
    CertificateComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
