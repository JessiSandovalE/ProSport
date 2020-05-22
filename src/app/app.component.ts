import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'proSport';
  langs: string[] = [];
  constructor(
    private translate: TranslateService
  ){
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    this.translate.get('home.phrase')
    .subscribe((res: string) => {console.log(res); });
  }

 /*  changeLang(lang:string){
    this.translate.use(lang);
  } */
}
