import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ServicesComponent } from './services/services.component';
import { PlanesComponent } from './planes/planes.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PhilosophyComponent,
    ServicesComponent,
    PlanesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    PhilosophyComponent,
    ServicesComponent,
    PlanesComponent,
    ContactComponent
  ]
})
export class PagesModule { }
