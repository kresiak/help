import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { TranslateModule, TranslateLoader, TranslateService  } from '@ngx-translate/core'


import { locale as english } from './locale/en'
import { locale as french } from './locale/fr'

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');  // https://angular.io/guide/i18n#i18n-pipes      //A5

import { HomeComponent} from './home.component'
import { OtherComponent } from './other.component';

import { BasicDataServicesModule } from 'gg-basic-data-services'
import { UiModule } from 'gg-ui'
import { SearchHandleDataModule } from 'gg-search-handle-data'
import { TranslationLoaderService, TranslationServicesModule } from 'gg-translation'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, OtherComponent
  ],
  imports: [
    UiModule.forRoot(), SearchHandleDataModule.forRoot(), TranslationServicesModule.forRoot(), BasicDataServicesModule.forRoot(),    
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    Ng2AutoCompleteModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot(),
    RouterModule.forRoot([
    ])    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translateService: TranslateService ) {
    this.translateService.addLangs(["en", "fr"])
    this.translateService.setDefaultLang('en')
    this.translateService.use('fr')        

    var loadTranslations= (...args: ILocale[]): void => {
      const locales = [...args];
      locales.forEach((locale) => {
        this.translateService.setTranslation(locale.lang, locale.data, true);
      });
    }
    
    loadTranslations(english, french)

  }  

}

interface ILocale {
  lang: string;
  data: Object;
}