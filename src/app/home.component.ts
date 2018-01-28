import { Component } from '@angular/core'
import { Observable } from 'rxjs/Rx'

@Component(
    {
        templateUrl: './home.component.html'
    }
)
export class HomeComponent {
    public errFn = function (err) { console.log('Error: ' + err); }

    constructor() {
        
    }


}