import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { TranslateModule, TranslateLoader, TranslateService  } from '@ngx-translate/core'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
export class AppModule { }
