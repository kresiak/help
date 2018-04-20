import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataStore, WebSocketService, ConfigService } from 'gg-basic-data-services'
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
    selector: 'giga-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private webSocketService: WebSocketService, public translate: TranslateService, private configService: ConfigService, private dataStore: DataStore ) {
        
        this.configService.setProduction(environment.production)
        this.dataStore.setApplication(this.dataStore.XENIA)         // ici ce ne sera pas XENIA, mais un id different
        this.webSocketService.init(this.dataStore.XENIA)    //
        
       
        setTimeout(() => {
            this.webSocketService.requeryDb()
        }, 3 * 60 * 60 * 1000)
     }

    ngOnInit(): void {
    }

    public menuObservable = Observable.from([[
        {
            route: '/home',
            title: 'Home',
            titleKey: 'MENU.HOME',
            active: false
        },
        {
            route: '/dashboard',
            title: 'Dashboard',
            titleKey: 'MENU.DASHBOARD',
            active: false
        }
        ]]);
}

