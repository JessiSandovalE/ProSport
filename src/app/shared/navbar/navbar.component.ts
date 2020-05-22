import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  langs: string[] = [];
  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
    this.translate.get('home.phrase')
    .subscribe((res: string) => {console.log(res); });
  }

  ngOnInit(): void {
  }
  changeLang(lang:string){
    this.translate.use(lang);
  }
}
