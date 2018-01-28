import { Component } from '@angular/core'
import { Observable } from 'rxjs/Rx'

@Component(
    {
        templateUrl: './other.component.html'
    }
)
export class OtherComponent {
    public errFn = function (err) { console.log('Error: ' + err); }

    constructor() {
        
    }


}