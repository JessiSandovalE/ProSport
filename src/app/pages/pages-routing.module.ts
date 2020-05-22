import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ServicesComponent } from './services/services.component';
import { PlanesComponent } from './planes/planes.component';
import { ContactComponent } from './contact/contact.component';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path:'',
                component: HomeComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'philosophy',
                component: PhilosophyComponent
            },
            {
                path: 'services',
                component: ServicesComponent
            },
            {
                path: 'planes',
                component: PlanesComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }
