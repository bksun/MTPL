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
<<<<<<< HEAD
import { ProgressComponent } from './progress/progress.component';
=======
import { CertificateComponent } from './certificate/certificate.component';
>>>>>>> 36a9f53d8d690f24f6859aa51b284aabfd331d7b

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
<<<<<<< HEAD
    HomeComponent,
    ProgressComponent
=======
    CertificateComponent
>>>>>>> 36a9f53d8d690f24f6859aa51b284aabfd331d7b
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
